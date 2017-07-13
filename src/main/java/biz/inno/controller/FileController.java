package biz.inno.controller;

/**
 * Created by Administrator on 2017/7/7.
 */

import biz.inno.service.FileService;
import biz.inno.utils.Msg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;


@RequestMapping("file")
@Controller
public class FileController {

    @Autowired
    private FileService fileService;

    /**
     * 文件上传功能
     * @param file
     * @return
     * @throws IOException
     */
    @RequestMapping(value="/upload",method= RequestMethod.POST)
    @ResponseBody
    public Msg upload(MultipartFile file, HttpServletRequest request) throws IOException{
        String path = request.getSession().getServletContext().getRealPath("upload");
        long timeStamp = System.currentTimeMillis();

        String originfilename = file.getOriginalFilename();//原始上传时候的文件名
        String filetype = originfilename.substring(originfilename.indexOf("."));
        String originfilename_=originfilename.substring(0,originfilename.indexOf("."));

        String storefileName =originfilename_+"-"+timeStamp+filetype;
        File dir = new File(path,originfilename);
        System.out.println("路径："+path+"原始文件名称 :"+originfilename+"dir:"+dir+"存储名称:"+storefileName);
        if(!dir.exists()){
            dir.mkdirs();
        }

        //MultipartFile自带的解析方法
        file.transferTo(dir);
        int count =fileService.upload(originfilename,storefileName,path);
        if(count>0){return Msg.success();}
        else return Msg.fail();
    }

    /**
     * 文件下载功能
     * @param request
     * @param response
     * @throws Exception
     */
    @RequestMapping("/down")
    public void down(HttpServletRequest request,HttpServletResponse response) throws Exception{
        //模拟文件，myfile.txt为需要下载的文件
        String fileName = request.getSession().getServletContext().getRealPath("upload")+"/myfile.txt";
        //获取输入流
        InputStream bis = new BufferedInputStream(new FileInputStream(new File(fileName)));
        //假如以中文名下载的话
        String filename = "下载文件.txt";
        //转码，免得文件名中文乱码
        filename = URLEncoder.encode(filename,"UTF-8");
        //设置文件下载头
        response.addHeader("Content-Disposition", "attachment;filename=" + filename);
        //1.设置文件ContentType类型，这样设置，会自动判断下载文件类型
        response.setContentType("multipart/form-data");
        BufferedOutputStream out = new BufferedOutputStream(response.getOutputStream());
        int len = 0;
        while((len = bis.read()) != -1){
            out.write(len);
            out.flush();
        }
        out.close();
    }
}
