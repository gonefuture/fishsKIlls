package cn.zhku.fishery.mybatis.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class DownloadExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public DownloadExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(String value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(String value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(String value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(String value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(String value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(String value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLike(String value) {
            addCriterion("id like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotLike(String value) {
            addCriterion("id not like", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<String> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<String> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(String value1, String value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(String value1, String value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andNameIsNull() {
            addCriterion("name is null");
            return (Criteria) this;
        }

        public Criteria andNameIsNotNull() {
            addCriterion("name is not null");
            return (Criteria) this;
        }

        public Criteria andNameEqualTo(String value) {
            addCriterion("name =", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotEqualTo(String value) {
            addCriterion("name <>", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThan(String value) {
            addCriterion("name >", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThanOrEqualTo(String value) {
            addCriterion("name >=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThan(String value) {
            addCriterion("name <", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThanOrEqualTo(String value) {
            addCriterion("name <=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLike(String value) {
            addCriterion("name like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotLike(String value) {
            addCriterion("name not like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameIn(List<String> values) {
            addCriterion("name in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotIn(List<String> values) {
            addCriterion("name not in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameBetween(String value1, String value2) {
            addCriterion("name between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotBetween(String value1, String value2) {
            addCriterion("name not between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeIsNull() {
            addCriterion("downloadtime is null");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeIsNotNull() {
            addCriterion("downloadtime is not null");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeEqualTo(Date value) {
            addCriterion("downloadtime =", value, "downloadtime");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeNotEqualTo(Date value) {
            addCriterion("downloadtime <>", value, "downloadtime");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeGreaterThan(Date value) {
            addCriterion("downloadtime >", value, "downloadtime");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeGreaterThanOrEqualTo(Date value) {
            addCriterion("downloadtime >=", value, "downloadtime");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeLessThan(Date value) {
            addCriterion("downloadtime <", value, "downloadtime");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeLessThanOrEqualTo(Date value) {
            addCriterion("downloadtime <=", value, "downloadtime");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeIn(List<Date> values) {
            addCriterion("downloadtime in", values, "downloadtime");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeNotIn(List<Date> values) {
            addCriterion("downloadtime not in", values, "downloadtime");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeBetween(Date value1, Date value2) {
            addCriterion("downloadtime between", value1, value2, "downloadtime");
            return (Criteria) this;
        }

        public Criteria andDownloadtimeNotBetween(Date value1, Date value2) {
            addCriterion("downloadtime not between", value1, value2, "downloadtime");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceIsNull() {
            addCriterion("downloadsource is null");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceIsNotNull() {
            addCriterion("downloadsource is not null");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceEqualTo(String value) {
            addCriterion("downloadsource =", value, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceNotEqualTo(String value) {
            addCriterion("downloadsource <>", value, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceGreaterThan(String value) {
            addCriterion("downloadsource >", value, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceGreaterThanOrEqualTo(String value) {
            addCriterion("downloadsource >=", value, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceLessThan(String value) {
            addCriterion("downloadsource <", value, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceLessThanOrEqualTo(String value) {
            addCriterion("downloadsource <=", value, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceLike(String value) {
            addCriterion("downloadsource like", value, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceNotLike(String value) {
            addCriterion("downloadsource not like", value, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceIn(List<String> values) {
            addCriterion("downloadsource in", values, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceNotIn(List<String> values) {
            addCriterion("downloadsource not in", values, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceBetween(String value1, String value2) {
            addCriterion("downloadsource between", value1, value2, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andDownloadsourceNotBetween(String value1, String value2) {
            addCriterion("downloadsource not between", value1, value2, "downloadsource");
            return (Criteria) this;
        }

        public Criteria andAdminidIsNull() {
            addCriterion("adminid is null");
            return (Criteria) this;
        }

        public Criteria andAdminidIsNotNull() {
            addCriterion("adminid is not null");
            return (Criteria) this;
        }

        public Criteria andAdminidEqualTo(String value) {
            addCriterion("adminid =", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotEqualTo(String value) {
            addCriterion("adminid <>", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidGreaterThan(String value) {
            addCriterion("adminid >", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidGreaterThanOrEqualTo(String value) {
            addCriterion("adminid >=", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidLessThan(String value) {
            addCriterion("adminid <", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidLessThanOrEqualTo(String value) {
            addCriterion("adminid <=", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidLike(String value) {
            addCriterion("adminid like", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotLike(String value) {
            addCriterion("adminid not like", value, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidIn(List<String> values) {
            addCriterion("adminid in", values, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotIn(List<String> values) {
            addCriterion("adminid not in", values, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidBetween(String value1, String value2) {
            addCriterion("adminid between", value1, value2, "adminid");
            return (Criteria) this;
        }

        public Criteria andAdminidNotBetween(String value1, String value2) {
            addCriterion("adminid not between", value1, value2, "adminid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidIsNull() {
            addCriterion("dictionaryid is null");
            return (Criteria) this;
        }

        public Criteria andDictionaryidIsNotNull() {
            addCriterion("dictionaryid is not null");
            return (Criteria) this;
        }

        public Criteria andDictionaryidEqualTo(Integer value) {
            addCriterion("dictionaryid =", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidNotEqualTo(Integer value) {
            addCriterion("dictionaryid <>", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidGreaterThan(Integer value) {
            addCriterion("dictionaryid >", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidGreaterThanOrEqualTo(Integer value) {
            addCriterion("dictionaryid >=", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidLessThan(Integer value) {
            addCriterion("dictionaryid <", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidLessThanOrEqualTo(Integer value) {
            addCriterion("dictionaryid <=", value, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidIn(List<Integer> values) {
            addCriterion("dictionaryid in", values, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidNotIn(List<Integer> values) {
            addCriterion("dictionaryid not in", values, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidBetween(Integer value1, Integer value2) {
            addCriterion("dictionaryid between", value1, value2, "dictionaryid");
            return (Criteria) this;
        }

        public Criteria andDictionaryidNotBetween(Integer value1, Integer value2) {
            addCriterion("dictionaryid not between", value1, value2, "dictionaryid");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}