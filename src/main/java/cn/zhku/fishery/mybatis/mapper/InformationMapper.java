package cn.zhku.fishery.mybatis.mapper;


import cn.zhku.fishery.mybatis.entity.Information;
import cn.zhku.fishery.mybatis.entity.InformationExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface InformationMapper {

    @Select("select * from information limit #{cp},#{ls} ")
    List<Information> InfoList(@Param("cp") int cp, @Param("ls") int ls);

    long countByExample(InformationExample example);

    int deleteByExample(InformationExample example);

    int deleteByPrimaryKey(Integer informationid);

    int insert(Information record);

    int insertSelective(Information record);

    List<Information> selectByExampleWithBLOBs(InformationExample example);

    List<Information> selectByExample(InformationExample example);

    Information selectByPrimaryKey(Integer informationid);

    int updateByExampleSelective(@Param("record") Information record, @Param("example") InformationExample example);

    int updateByExampleWithBLOBs(@Param("record") Information record, @Param("example") InformationExample example);

    int updateByExample(@Param("record") Information record, @Param("example") InformationExample example);

    int updateByPrimaryKeySelective(Information record);

    int updateByPrimaryKeyWithBLOBs(Information record);

    int updateByPrimaryKey(Information record);
}