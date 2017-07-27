package cn.zhku.fishery.mybatis.mapper;

import cn.zhku.fishery.mybatis.entity.Download;
import cn.zhku.fishery.mybatis.entity.Fish;
import cn.zhku.fishery.mybatis.entity.FishExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface FishMapper {

    @Select("select * from fish limit #{cp},#{ls} ")
    List<Fish> list(@Param("cp") int cp, @Param("ls") int ls);

    long countByExample(FishExample example);

    int deleteByExample(FishExample example);

    int deleteByPrimaryKey(Integer fid);

    int insert(Fish record);

    int insertSelective(Fish record);

    List<Fish> selectByExample(FishExample example);

    Fish selectByPrimaryKey(Integer fid);

    int updateByExampleSelective(@Param("record") Fish record, @Param("example") FishExample example);

    int updateByExample(@Param("record") Fish record, @Param("example") FishExample example);

    int updateByPrimaryKeySelective(Fish record);

    int updateByPrimaryKey(Fish record);
}