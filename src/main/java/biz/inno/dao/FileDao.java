package biz.inno.dao;

import org.apache.ibatis.annotations.Param;

/**
 * Created by Administrator on 2017/7/10.
 */
public interface FileDao {
    int UploadFile (@Param("originfilename")String originfilename, @Param("storefilename") String storefilename,@Param("path") String path);
}
