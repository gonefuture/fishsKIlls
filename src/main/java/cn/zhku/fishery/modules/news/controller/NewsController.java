package cn.zhku.fishery.modules.news.controller;


import cn.zhku.fishery.modules.news.entity.NewsMsg;
import cn.zhku.fishery.modules.news.entity.PageBean;
import cn.zhku.fishery.modules.news.service.NewsService;
import cn.zhku.fishery.mybatis.entity.News;


import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import sun.plugin.util.UIUtil;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * @author 钱伟健 gonefutre
 * @date: 2017/6/22 21:31.
 * @E-mail: gonefuture@qq.com
 */

@Controller
//

public class NewsController {
	@Autowired
    private NewsService newsService ;

//    @RequestMapping("NewsServelet")
//    public void method(String method,int nid) {
//        if(method == "findNewsByNid")
//            this.findNewsByNid(nid);
//    }

    /**
     * 通过nid查找news
     * @param nid
     * @return
     */
    @RequestMapping(value ="news", params="method=findByNid")

    public  @ResponseBody NewsMsg findNewsByNid (int nid) {
       // if(method == "findNewsByNid")
            newsService.findNewsByNid(nid);
        NewsMsg newsMsg = newsService.findNewsByNid(nid);
        return newsMsg;
    }

    /**
     *  增加新闻的方法
     * @param news
     * @return
     */
    @RequestMapping(value ="back/news", params="method=addNews")
    @ResponseBody
    public NewsMsg addNews(@ModelAttribute News news , MultipartFile picture)
            throws IOException {
        NewsMsg newsMsg = new NewsMsg(1,"上传新闻成功");
        if(picture !=null) {
            //储存图片的物理路径
            String pic_path = "D:\\Java\\temp\\";
            //原始名称
            String originalFileName = picture.getOriginalFilename();
            //新的的图片名称
            String newFileName = UUID.randomUUID()+originalFileName.substring(originalFileName.lastIndexOf("."));
            //新图片文件
            File newFile = new java.io.File(pic_path+newFileName);
            //将内存中的数据写入磁盘
            picture.transferTo(newFile);
            //将新图片名称写到news中
            news.setPic(newFileName);
            newsMsg =  newsService.saveNews(news);
        } else {
             newsMsg = new NewsMsg(2,"图片上传失败");
        }
        return newsMsg;
    }

    /**
     * 通过nid删除
     * @param nid 必须
     * @return NewsMsg的json，带有状态码和信息
     */
    @RequestMapping(value ="back/news", params="method=deleteNews")
    @ResponseBody
    public NewsMsg deleteNews(@RequestParam("nid") int nid ) {
        return newsService.deteteNews(nid);
    }

    /**
     * 通过nid修改News,附带要修改News的参数
     * @param nid 必须
     *  @param news 用来获取News的参数
      * @return NewsMsg的json，带有状态码和信息
     */
    @RequestMapping(value ="back/news", params="method=editNews")
    @ResponseBody
    public NewsMsg editNews(@RequestParam("nid") int nid , News news) {
        return newsService.editNews(nid,news);
    }


    /**
     *
     * @param dic
     * @param time
     * @return
     */
    @RequestMapping(value ="news", params="method=findByTime")
    @ResponseBody
    public ArrayList<News> findByTime(@RequestParam("dic") int dic , @RequestParam("time") int time){
        return newsService.findByTime(dic,time);
    }

    /**
     *
     * @param pc
     * @param ps
     * @param dic
     * @param news
     * @return
     */
    @RequestMapping(value ="news", params="method=QueryNews")
    @ResponseBody
    public PageInfo<News> query(String  pc ,String ps,String dic ,News news){
        if( pc== null ||  pc.trim().isEmpty())
            pc="1";
        if( ps== null || ps.trim().isEmpty())
            ps="5";
        if (dic !=null && !dic.trim().isEmpty() )
            news.setDictionaryid(Integer.valueOf(dic));
        return newsService.query(pc,ps,news);
    }


    @RequestMapping("/news/newsAdd")
    public String addNewsPost() {
        return "news/newsAdd";
    }



}
