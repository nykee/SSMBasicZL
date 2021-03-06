package biz.inno.utils;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by Administrator on 2017/7/5.
 */
public class Msg {
    private int code;
    private String msg;
    private Map<String, Object> extendInfo = new HashMap<>();


    public static Msg success(){
        Msg result = new Msg();
        result.setCode(100);
        result.setMsg("操作成功");
        return result;
    }

    public static Msg fail(){
        Msg result = new Msg();
        result.setCode(200);
        result.setMsg("操作失败");
        return result;
    }

    public Msg add(String key, Object value){
        this.getExtendInfo().put(key, value);
        return this;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Map<String, Object> getExtendInfo() {
        return extendInfo;
    }

    public void setExtendInfo(Map<String, Object> extendInfo) {
        this.extendInfo = extendInfo;
    }
}
