package cn.zhku.fishery.modules.download.service;

import cn.zhku.fishery.mybatis.entity.Download;
import cn.zhku.fishery.mybatis.entity.DownloadExample;
import cn.zhku.fishery.mybatis.mapper.DownloadMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.testng.annotations.Test;

import java.util.ArrayList;
import java.util.List;


/**
 * @author 钱伟健 gonefutre
 * @date: 2017/7/13 0:46.
 * @E-mail: gonefuture@qq.com
 */
@Service
public class DownloadSerivce {
    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private DownloadMapper downloadMapper;

    public List<Download> list(int cp, int ls) {
        cp = (cp-1)*ls;
        
        return downloadMapper.list(cp,ls);
    }



}
