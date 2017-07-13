package biz.inno.service.Impl;

import biz.inno.dao.FileDao;
import biz.inno.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 2017/7/10.
 */
@Service
public class FileServiceImpl implements FileService {
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private FileDao fileDao;






    public int upload(String originfilename, String storefilename, String path) {
        int affectedRows = fileDao.UploadFile(originfilename,storefilename, path);
        if(affectedRows>0){
            return affectedRows;
        }
        return  0;
    }
}
