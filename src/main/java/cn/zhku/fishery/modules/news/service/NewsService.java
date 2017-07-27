package cn.zhku.fishery.modules.news.service;

import cn.zhku.fishery.modules.news.entity.NewsMsg;
import cn.zhku.fishery.modules.news.entity.PageBean;
import cn.zhku.fishery.mybatis.entity.News;
import cn.zhku.fishery.mybatis.entity.NewsExample;
import cn.zhku.fishery.mybatis.mapper.NewsMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

/**
 * @author 钱伟健 gonefutre
 * @date: 2017/6/24 21:16.
 * @E-mail: gonefuture@qq.com
 */

@Service
public class NewsService {
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private NewsMapper newsMapper ;




    /**
     * 通过nid查找新闻
     * @param nid
     * @return
     */
    public NewsMsg findNewsByNid(int nid) {
        News news = newsMapper.selectByPrimaryKey(nid);
        NewsMsg newsMsg = new NewsMsg(1,"获取新闻成功");
        if(news != null) {
            BeanUtils.copyProperties(news,newsMsg);
        } else {
            newsMsg.setStatus(2);
            newsMsg.setVerbose("获取新闻失败");
        }

        return newsMsg;
    }

    /**
     * 保存News
     * @param news
     * @return
     */
    public NewsMsg saveNews(News news) {
        newsMapper.insert(news);
        NewsMsg newsMsg = new NewsMsg(1,"上传新闻成功");
        BeanUtils.copyProperties(news,newsMsg);
        return newsMsg;
    }

    /**
     * 删除News
     * @param nid
     * @return
     */
    public NewsMsg deteteNews(int nid) {
        int t = newsMapper.deleteByPrimaryKey(nid);
        System.out.print(t);
        NewsMsg newsMsg = new NewsMsg(1,"上传新闻成功");
        return newsMsg;
    }

    /**
     * 修改News
     * @param nid
     * @param news
     * @return
     */
    public NewsMsg editNews(int nid, News news) {
        news.setNid(nid);
        if( newsMapper.updateByPrimaryKey(news) != 0){
            NewsMsg newsMsg = new NewsMsg(1,"修改News成功");
            BeanUtils.copyProperties(news,newsMsg);
            return newsMsg;
        } else {
            return (new NewsMsg(2,"修改News失败"));
        }
    }

    /**
     * 多条件查询News
     * @param pc
     * @param ps
     * @param news
     * @return
     */
    public  PageInfo<News> query(String pc, String ps, News news) {
        NewsExample newsExample =  new NewsExample();
        NewsExample.Criteria criteria = newsExample.createCriteria();

        if(news.getDictionaryid() != null && news.getDictionaryid()!=0 )
            criteria.andDictionaryidEqualTo(news.getDictionaryid());
        if(this.checkEmpty(news.getAdminid()))
            criteria.andAdminidEqualTo(news.getAdminid());
        if(this.checkEmpty(news.getTitle()))
            criteria.andTitleLike("%"+news.getTitle()+"%");
        if(this.checkEmpty(news.getSoucename()))
            criteria.andSoucenameLike("%"+news.getSoucename()+"%");
        if(news.getLockflag()!= null && news.getLockflag() != 0 )
            criteria.andLockflagEqualTo(news.getLockflag());
        PageHelper.startPage(Integer.valueOf(pc),Integer.valueOf(ps));
        PageInfo<News> pageInfo = new PageInfo<News>(newsMapper.selectByExampleWithBLOBs(newsExample));
        return  pageInfo;
    }

    /**
     * 判断是否为空或null
     * @param obeject
     * @return
     */
    private boolean checkEmpty(String obeject) {
        return (obeject != null && !obeject.trim().isEmpty());
    }

    /**
     *
     * @param dic
     * @param time
     * @return
     */
    public ArrayList<News> findByTime(int dic, int time) {
        ArrayList<News> newsList = newsMapper.findByTime(dic,time);
            return newsList;
    }
}
