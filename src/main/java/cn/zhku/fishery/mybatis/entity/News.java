package cn.zhku.fishery.mybatis.entity;

import java.util.Date;

public class News {
    private Integer nid;

    private String title;

    private Date pubdate;

    private Integer lockflag;

    private String soucename;

    private String adminid;

    private Integer dictionaryid;

    private String text;

    private String pic;

    private String content;

    public Integer getNid() {
        return nid;
    }

    public void setNid(Integer nid) {
        this.nid = nid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public Date getPubdate() {
        return pubdate;
    }

    public void setPubdate(Date pubdate) {
        this.pubdate = pubdate;
    }

    public Integer getLockflag() {
        return lockflag;
    }

    public void setLockflag(Integer lockflag) {
        this.lockflag = lockflag;
    }

    public String getSoucename() {
        return soucename;
    }

    public void setSoucename(String soucename) {
        this.soucename = soucename == null ? null : soucename.trim();
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

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text == null ? null : text.trim();
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic == null ? null : pic.trim();
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }
}