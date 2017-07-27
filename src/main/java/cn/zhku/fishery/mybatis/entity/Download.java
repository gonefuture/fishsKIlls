package cn.zhku.fishery.mybatis.entity;

import java.util.Date;

public class Download {
    private String id;

    private String name;

    private Date downloadtime;

    private String downloadsource;

    private String adminid;

    private Integer dictionaryid;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Date getDownloadtime() {
        return downloadtime;
    }

    public void setDownloadtime(Date downloadtime) {
        this.downloadtime = downloadtime;
    }

    public String getDownloadsource() {
        return downloadsource;
    }

    public void setDownloadsource(String downloadsource) {
        this.downloadsource = downloadsource == null ? null : downloadsource.trim();
    }

    public String getAdminid() {
        return adminid;
    }

    public void setAdminid(String adminid) {
        this.adminid = adminid == null ? null : adminid.trim();
    }

    public Integer getDictionaryid() {
        return dictionaryid;
    }

    public void setDictionaryid(Integer dictionaryid) {
        this.dictionaryid = dictionaryid;
    }
}