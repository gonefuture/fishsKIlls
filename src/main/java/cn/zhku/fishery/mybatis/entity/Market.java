package cn.zhku.fishery.mybatis.entity;

public class Market {
    private Integer marketid;

    private String marketname;

    private String province;

    private Integer dictionaryid;

    private String adminid;

    public Integer getMarketid() {
        return marketid;
    }

    public void setMarketid(Integer marketid) {
        this.marketid = marketid;
    }

    public String getMarketname() {
        return marketname;
    }

    public void setMarketname(String marketname) {
        this.marketname = marketname == null ? null : marketname.trim();
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province == null ? null : province.trim();
    }

    public Integer getDictionaryid() {
        return dictionaryid;
    }

    public void setDictionaryid(Integer dictionaryid) {
        this.dictionaryid = dictionaryid;
    }

    public String getAdminid() {
        return adminid;
    }

    public void setAdminid(String adminid) {
        this.adminid = adminid == null ? null : adminid.trim();
    }
}