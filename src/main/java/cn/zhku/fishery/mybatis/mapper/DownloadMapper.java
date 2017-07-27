package cn.zhku.fishery.mybatis.mapper;

import cn.zhku.fishery.mybatis.entity.Download;
import cn.zhku.fishery.mybatis.entity.DownloadExample;

import java.util.ArrayList;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface DownloadMapper {

    @Select("select * from download limit #{cp},#{ls} ")
    List<Download> list(@Param("cp") int cp, @Param("ls") int ls);

    long countByExample(DownloadExample example);

    int deleteByExample(DownloadExample example);

    int deleteByPrimaryKey(String id);

    int insert(Download record);

    int insertSelective(Download record);

    List<Download> selectByExample(DownloadExample example);

    Download selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") Download record, @Param("example") DownloadExample example);

    int updateByExample(@Param("record") Download record, @Param("example") DownloadExample example);

    int updateByPrimaryKeySelective(Download record);

    int updateByPrimaryKey(Download record);
}