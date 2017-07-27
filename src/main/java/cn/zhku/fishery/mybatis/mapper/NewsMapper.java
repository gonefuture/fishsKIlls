package cn.zhku.fishery.mybatis.mapper;

import cn.zhku.fishery.mybatis.entity.News;
import cn.zhku.fishery.mybatis.entity.NewsExample;

import java.util.ArrayList;
import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

public interface NewsMapper {

    @Select("SELECT * FROM news WHERE dictionaryid = #{dict} and pubdate > DATE_SUB(NOW(), INTERVAL #{month} MONTH)")
    ArrayList<News> findByTime(@Param("dict") int dict, @Param("month") int month);


    long countByExample(NewsExample example);

    int deleteByExample(NewsExample example);

    int deleteByPrimaryKey(Integer nid);

    int insert(News record);

    int insertSelective(News record);

    List<News> selectByExampleWithBLOBs(NewsExample example);

    List<News> selectByExample(NewsExample example);

    News selectByPrimaryKey(Integer nid);

    int updateByExampleSelective(@Param("record") News record, @Param("example") NewsExample example);

    int updateByExampleWithBLOBs(@Param("record") News record, @Param("example") NewsExample example);

    int updateByExample(@Param("record") News record, @Param("example") NewsExample example);

    int updateByPrimaryKeySelective(News record);

    int updateByPrimaryKeyWithBLOBs(News record);

    int updateByPrimaryKey(News record);
}