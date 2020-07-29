DDL(���ݶ���):Data Definition Language
   - create: CREATE TABLE amb(id NUMBER(2,0) primary key, 
name VARCHAR2(50), age NUMBER(2)) 
   - rename A to B  �޸ı���AΪB
   - alter: 
alter table name add(hiredate DATE DEFAULT sysdate) �����ֶ�
		��ֻ����������󣬲��ܲ��������У�
	            modify(job varchar2(40)) �޸��ֶ�
                             drop column (hiredate) ɾ���ֶ�
   - drop table NAME:
      ע��ɾ����ṹ��
   - truncate:
truncate table emp;
      ע��ɾ�������ݣ������ṹ 
DCL(���ݿ���):Data Control Language
   - grant:
   - revoke:
   - create user:
DML(���ݲ���):Data Manipulation Language
   - insert:   INSERT INTO amb(id1,name1,age1) VALUES( , , )
   - ���ڸ�ʽ��TO_DATE('1999-9-9','YYYY-MM-DD')
   - delete:
   - update: UPDATE amb SET name='' WHERE id=?  ��������
TCL(�������):Data Transaction Language
   - commit
   - rollback
   - savepoint
DQL(���ݲ�ѯ):Data  Language
   - select:SELECT * FROM amb 
   - DESC  ��ѯ��ṹ  
------------------NUMBER��ֵ����--------------------------
   ----NUMBER(precision,scale)
- number(5,2)
-------NUMBER�ı����������ͣ��ڲ�ʵ��NUMBER�����Խ������ΪNUMBER�ı���
         Ŀ�ģ�ʵ�ֶ������ݿ⼰������Եļ���
- numeric(p,s):��ȫӳ����number(p,s)
- decimal(p,s):ͬ��
- integer/int:��ȫӳ����NUMBER(38)����
- select trunc(<���ڽ�ȡ>) from dual
- where length(ename)>5  <length>�õ��ַ����� 
------------------CHAR����---------------------------
 - CAHR(N)��NΪռ���ֽڣ���󳤶ȡ���2000�ֽڡ�
    ��������Ĭ�ϳ���Ϊ1���ɲ�ָ�����ȡ�
 - CLOB���洢������䳤�ַ��������洢4GB
    ���涨����䳤�ַ�����
 - VARCHAR2(N):��󳤶ȡ���4000�ֽڡ�
�䳤��������ָ������
 - LONG��VARCHAR2()�ӳ��棬���洢��2GB
    ���ƣ�ÿ����ֻ����һ��LONG�����ֶΣ�������Ϊ���������ܽ���������
���ܳ����ڲ�ѯ������...
Oracle����ʹ��CLOB����LONG����
------------------��λ����-----------------------
 - LPAD(char1,n,char2) ��λ����
 - EPAD(char1,n,char2) �Ҳ�λ����
--��sal��$����6λ
select ename,LPAD(sal,6,'$') FROM emp;
--------------�����ַ���char1,char2--------------
SELECT CONCAT(CONCAT(enname,','),sal) FROM emp__Ambrose
��㷽���� ||
SELECT enname||','||sal FROM emp__Ambrose
LEGTH(ename)
------------��Сдת��--------------------
select upper("hello world"),lower("HELLO WORLD"),INITCAP("hello world") from dual
UPPER(char):���ַ�ת��Ϊ��д��ʽ
LOWER(char):���ַ�ת��ΪСд��ʽ
ININCAP(char):������ĸ��д�����ʼ��ÿո����
-----------------�ֶ����-----------------
- SELECT enname,sal,comm,sal+comm FROM emp__Ambrose
------------------��ֵ����------------------
select ename,sal,comm,sal+nvl(comm,0) FROM emp;
--NVL2(expr1,expr2,expr3):�ж�expr1��Ϊ��ȡexpr2��Ϊ��ȡexpr3.
select ename,sal,comm,nvl2(comm,sal+comm,sal) FROM emp
---------------------�����ж�--------------------
>,<,>=,<=,!=�ȼ���<>,=

----------�ӿ�ѡ�������ݸĶ���DECODE()-------------------------------
SELECT enname,job,sal,DECODE(job,'MANAGER',sal*1.2,'ANALYEST',sal*1.1,'SALESMAN',sal*1.05,sal) de FROM emp__Ambrose 
SELECT enname,job,sal,CASE job 
  WHEN 'MANAGER' THEN sal*1.2 
  WHEN 'ANALEST' THEN sal*1.1 
  WHEN 'SALESMAN' THEN sal*1.4 
  ELSE sal  
  END bonus  FROM emp__Ambrose e
SELECT COUNT(*),DECODE(JOB,'MANAGER','VIP','ANALYST','VIP','SELESMAN','OTHER') FROM emp__Ambrose 
GROUP BY DECODE(JOB,'MANAGER','VIP','ANALYST','VIP','SELESMAN','OTHER') 
SELECT deptno,dname,loc FROM dept__Ambrose  ORDER BY DECODE(dname,'OPERATION','1','ACCOUNTING','2','SALES','3')
-------------TRIM,LTRIM,RTRIM:ȥ���ַ��������ظ��ַ����򵥶�ȥ������ұߵ��ַ�----------
-SELECT TRIM('e' FROM 'eeeefdsfkeeee') FROM emp__Ambrose	�ַ���ȫȥ��
-SELECT LTRIM('fffdaf','f') FROM emp__Ambrose			�ַ�����ȥ��
-SELECT RTRIM('eeeeliteeee' , 'e') FROM dual			�ַ�����ȥ��

-----------------------substr/instr��ȡ�ַ���/��ѯ�ַ���λ��-----------------------
SELECT SUBSTR('thinking in java' ,-7,2) FROM dual	-��Ϊ�����ȡ

SELECT SUBSTR('thinking in java' ,7,2) FROM dual

SELECT SUBSTR('thinking0in java' ,-9,2) FROM dual

SELECT INSTR('thinging in java','in',4,2) FROM dual	��ѯ�ַ���λ��

------------round���������룩��mod��ȡ�ࣩ-------------------------
-round(m,n)  nΪ����ȡ����С��Ϊ��Ϊ����ȡ��������λ
SELECT ROUND(45.678,2) FROM dual; --45.68
SELECT ROUND(45.678,-1) FROM dual;  --46
SELECT ROUND(55.678,-2) FROM dual; --60
- mod  ȡ��
SELECT MOD(13,4) FROM dual; --1
- ceil  ����ȡ��
SELECT CEIL(45.12) FROM dual; --46
- floor  ����ȡ��
SELECT FLOOR(45.678) FROM dual; --45
- trunc():���ڽ�ȡ
SELECT TRUNC(45.678,2) FROM DUAL�� --45.67
                         (45.678,-1)                         --40
------------------------sql��������-----------------------------------
- ��������תӢ�ĸ�ʽ
- TO_DATE('1999-09-09','YYYY-MM-DD')
SELECT SYSDATE-TO_DATE('1993-09-09','YYYY-MM-DD HH24:MI:SS') FROM dual
- Ӣ������ת���ĸ�ʽ
- TO_CHAR(TO_DATE('08-09-50','MM-DD-RR'),'YYYY-MM-DD')--��תto_date��תto_char
 ע�����ڸ�ʽת��Ϊ�����ַ�����ʽ
- last_day
  SELECT LAST_DAY(SYSDATE) FROM DUAL
 ע����ϵͳ�������һ��
    SELECT EXTRACT(YEAR FROM SYSDATE) FROM dual ��ȡ���
- systimestamp
   SELECT SYSTIMESTAMP FROM DUAL
   ע����ѯ���뼶ʱ��
- sysdate:��ϵͳʱ��
  SELECT SYSDATE FROM DUAL 
- next_day:�����ܵ�����
  SELECT NEXT_DAY(SYSDATE,4) FROM dual  
- least
  SELECT LEAST(TO_DATE('2008-08-08','YYYY-MM-DD'),SYSDATE) FROM dual
  ע����������
- SELECT ADD_MONTHS(hiredate,-12*20) from emp__ambrose
  ע����ѯ20���º�
 -month_between:����ʱ����
  SELECT ename,MONTH_BETWEEN(SYSDATE,hforFROM emp;
 -least:�Ƚ����ڴ�С(������ת��--��������һ�£��ڶ������������ͻᱻ����ת��Ϊ��һ������������)
  SELECT LEAST(SYSDATE,'10-10��-08') FROM DUAL;
 -extract:��ȡ����ָ���ֶ�
SELECT EXTRACT(HOUR FROM TIMESTAMP '2008-10-10 10:10:10') FROM DUAL;
------------------------Լ��-------------------------------
 - LIKEģ��ƥ���ַ�����֧������ͨ�����
%��0-����ַ�    
_:��һ��һ���ַ�*/
 - WHERE ename LIKE '_A%';
  �ж��ڻ����б���
 - IN(list)�� NOT IN(list)
  ----����Լ��---
 - BETWEEN...AND...
 ע��
SELECT enname,sal,dephno FROM emp__Ambrose
WHERE (SAL BETWEEN 1000 AND 3000) AND dephno IN('20','30')
AND (enname LIKE '_%A%')
    ------�ۺϺ���--------
/*�ۺϺ����ֳ�Ϊ���麯�������к�����
�ۺϺ����������ǶԽ����ָ���ֶε�ֵ����ͳ�ƹ���*/
    MAX(),MIN(),SUM(),AVG()�� COUNT()
�� ���ֵ����Сֵ����ͣ���ƽ����,ͳ�Ƽ�¼����
SELECT MAX(sal),MIN(sal),SUM(sal),AVG(sal),COUNT(sal) FROM emp__Ambrose
     ------COUNT(*)�鿴��¼����--------
 - SELECT COUNT(*) FROM emp__Ambrose�� 
    ---------DISTINCT:ȥ���ظ��ֶ�-----------
SEECT DISTINCE deptno from dual;
 -------NVL����)Ӧ�ã��ۺϺ�����NULLֵʱ--------------
SELECT AVG(NVL(comm,0)) FROM emp__Ambrose
   ------�ۺϺ�����������where�Ӿ���
   ------GROUP BY ***���ݸ������ֶ�ֵһ���ļ�¼���з���(����ͳ��һ������ʱ)
   ------HAVING�Ӿ���Ը��ݾۺϺ������й���
SELECT MAX(sal),dephno FROM emp__Ambrose
GROUP BY dephno
HAVING��AVG(sal)>2000
   ����-----������ѯ-------
    ---------������-----------
SELECT e.enname,e.dephno,d.deptno,d.loc FROM emp__Ambrose e,dept__Ambrose d
WHERE e.dephno=d.deptno
AND d.loc='NEWYORK' 
    ----------������------------
 �����ӣ��ڹ�����ѯ�г��˽������������������ļ�¼��ѯ����֮�⣬
 �����Խ����������������ļ�¼Ҳ�г�����
 �����ӷ�Ϊ���������ӣ��������ӣ�ȫ������
  �������ӣ���JOIN�������Ϊ�������ñ��¼��Ҫ��ѯ������
  ��ĳ����¼��������������ʱ��
  ��ô�ڽ�����и�����¼����JOIN�Ҳ���ֶε�ֵȫ��ΪNULL
 - ��������
 SELECT e.enname,e.job,e.sal,d.dname,d.loc FROM emp__Ambrose e
 LEFT OUTER JOIN dept__Ambrose d ON e.dephno=d.deptno
 - ��������
SELECT e.enname,e.sal,e.job,d.dname,d.loc FROM emp__Ambrose e
RIGHT OUTER JOIN dept__Ambrose d ON e.dephno=d.deptno
 - ȫ����
SELECT e.enname,e.job,e.sal,d.dname,d.loc FROM emp__Ambrose e
FULL OUTER JOIN dept__Ambrose ON e.dephno=d.deptno
   ------------������---------------
 - Ϊ������Լ���ͬ���ԣ��������ִ������¼���ϵ����״�ṹ����
SELECT e.enname,d.enname FROM emp__Ambrose e
LEFT OUTER JOIN emp__Ambrose d ON d.mgr=e.empno
    --------������join...on...������ѯ--------
SELECT e.enname,d.dname FROM emp__Ambrose e
JOIN dept__Ambrose d ON e.dephno=d.deptno

    !!**---------�����Ƚ�Լ��--------------**
/*ANY(list),ALL(list)
ANY,ALL �����>,>=,<=ʹ�õ�
>ANY(list):�����б�֮һ��������С
>ALL(list):�����б����У�������С
<ANY(list):С���б�֮һ��С�����
<ALL(list):С���б����У�С����С
ANY,ALL���б��в�����̶�ֵ��û��ʵ�����壬
���ǳ�����Ӳ�ѯʹ��*/
SELECT enname,job,sal,dephno,empno FROM emp__Ambrose
--WHERE��sal>ANY(3500,4000,4500)
WHERE sal>ALL(1500,3000,4500)
 - DISTINCT(���δ�):Ĩ���ظ�Ԫ�ػ���ͬ�ļ�¼
SELECT DISTINCT job,dephno FROM emp__Ambrose
   -------------����---------------
 - ORDER BY ** DESC(��������)/ASC(��������) 

 - �ӿ�ѡ�������ݸĶ���CASE * WHEN * THEN * ELSE *0 END *1 FROM *
SELECT enname,job,sal,DECODE(job,'MANAGER',sal*1.2,'ANALYEST',sal*1.1,'SALESMAN',sal*1.05,sal) de FROM emp__Ambrose 
SELECT enname,job,sal,CASE job 
  WHEN 'MANAGER' THEN sal*1.2 
  WHEN 'ANALEST' THEN sal*1.1 
  WHEN 'SALESMAN' THEN sal*1.4 
  ELSE sal  
  END bonus  FROM emp__Ambrose e
------------------------������-----------------------------
���������Խ����������ָ�����ֶη��飬Ȼ�������ٰ���ָ�����ֶ�������ÿ��ļ�¼����һ���кš�
 - ROW_NUMBER()<!���δ�>:��������������Ψһ�����֡�
SELECT enname,sal,job,dephno, 
ROW_NUMBER() OVER(PARTITION BY dephno ORDER BY sal DESC) rank 
FROM emp__Ambrose
�������Ҳ�Ψһ
SELECT enname,sal,job,dephno, RANK() OVER(PARTITION BY dephno ORDER BY sal DESC) rank FROM emp__Ambrose
�����Ҳ�Ψһ
SELECT enname,sal,job,dephno, DENSE_RANK() OVER(PARTITION BY dephno ORDER BY sal DESC) rank FROM emp__Ambrose
   -----��ѯĳ�����յ�Ӫҵ�------
SELECT TRUNC(DBMS_RANDOM.value(2012,2012)) AS year_id,
  TRUNC(DBMS_RANDOM.value(1,13)) AS month_id,
  TRUNC(DBMS_RANDOM.value(1,32)) day_id,
  ROUND(DBMS_RANDOM.value(1,100),2) AS sales_value FROM dual
CONNECT BY level <=1000
---------------------����������-----------------------------
 - ����
SELECT enname,job,sal FROM emp__Ambrose WHERE job='MANAGER' 
UNION 
SELECT enname,job,sal FROM emp__Ambrose WHERE sal>2500
 - ȫ��
SELECT enname,job,sal FROM emp__Ambrose WHERE JOB='MANAGER' 
UNION ALL 
SELECT enname,job,sal FROM emp__Ambrose WHERE  sal>2500
 - ����
SELECT enname,job,sal FROM emp__Ambrose WHERE job ='MANAGER'
INTERSECT 
SELECT enname,job,sal FROM emp__Ambrose WHERE sal >2500

----------------������----------------------------------
ROLLUP()����
ROLLUP�е�ÿ������������Ҫ������ֶΡ�
ROLLUP�Ὣ�����ֶ�����ݼ�������ͳ��
GROUP BY ROLLUP(a,b,c)
�ȼۣ�
GROUP BY a,b,c
UNION ALL GROUP BY a,b
UNION ALL GROUP BY a
UNION ALL
ȫ��
SELECT year_id,mouth_id,day_id,SUM(sales_value) FROM sales_tab_Ambrose
GROUP BY ROLLUP(year_id,mouth_id,day_id) ORDER BY year_id,mouth_id,day_id

CUBE()��������ÿ��������ÿ����϶�����һ�η��飬Ȼ������ͳ�ƽ������һ�����������ʾ��
����CUBE�������Ϊ2�Ĳ��������η���
SELECT year_id,mouth_id,day_id,SUM(sales_value) FROM sales_tab_Ambrose
GROUP BY CUBE(year_id,mouth_id,day_id) ORDER BY year_id,mouth_id,day_id

GROUP BY SETS()
GROUPING SET��ÿһ��������һ�ַ��鷽ʽ�����Ὣ��Щ����ͳ�ƵĽ������һ�����������ʾ
--�鿴ÿ����ÿ�µ�Ӫҵ�
SELECT year_id,mouth_id,day_id,SUM(sales_value) FROM sales_tab_Ambrose
GROUP BY GROUPING SETS((year_id,mouth_id,day_id),(year_id,mouth_id)) 
ORDER BY year_id,mouth_id,day_id

----------------------VIEW----------------------------------
 - ������ͼ
CREATE VIEW view_Ambrose AS 
SELECT empno,enname,sal,dephno FROM emp__Ambrose WHERE dephno=10 

����ͼ���в�����DML��������Ⱦ�������ݱ�
��������ͼ����DML��������ͼ�Ի������Ӧ���ݽ��и�DML������
���ǲ��������ͼ�Ըü�¼���ɼ�
DELETE���������Ⱦ����
DELETE FROM view_Ambrose WHERE dephno=20

------���б������ create or repalce view V_a as select ���� id from a--------

Ϊ��ͼ��Ӽ��ѡ����Ա������ͼ���������¶Ի������������Ⱦ��
 - WITH CHECK OPTION 
ֻ��ѡ��
 - WITH READ ONLY
ֻ��ѡ��Ҫ�����ͼ���ܽ��в�ѯ�������ܽ����κ�DML����
ѡ��Ҫ�����ͼ����DML�����󣬸ü�¼�������ͼ�ɼ���
CREATE OR REPLACE VIEW VIEW_Ambrose AS 
SELECT empno id,enname name,sal salary,dephno FROM emp__Ambrose
WHERE dephno=10 
WITH CHECK OPTION
DESC view_abmrose

------------------SEQUENCE����-------------------------
 - ��������
CREATE SEQUENCE sql_emp_id_Ambro
START WITH 1 INCREMENT BY 1
 - ����֧�ֵġ�α�С�
����֧������α�У�
NEXTVAL:��ȡ���е���һ�����֣��������´��������У���ô���START WITH��ʼ���ء�
֮���������ϴ����ɵ����ּ��ϲ������õ��������ɵ����ֲ����ء�
�����в��ܺ��ˣ��Ҳ���������ƣ�
 
 CURRVAL:��ȡ����������ɵ����֣��´������������ٵ���NEXTVAL����һ�����ֺ�ſ���ʹ�á�
 CURRVAL���ᵼ�����в���
 SELECT sql_emp_id_Ambrose.NEXTVAL FROM DUAL
 SELECT sql_emp_id_Ambrose.CURRVAL FROM DUAL
 
 - ��������
CREATE INDEX idx_emp_Ambrose ON emp__Ambrose(enname)
 - ��������
CREATE INDEX idx_emp__Ambrose_job_sal ON emp__Ambrose(job,sal)
CREATE INDEX emp__Ambrose_upper_idx ON emp__Ambrose(UPPER(enname))
SELECT * FROM emp__Ambrose WHERE UPPER(enname)='KING'
 - �ؽ�������ALTER INDEX * REBUILD
ALTER INDEX index_name REBUILD
DROP INDEX idx_emp__Ambrose_enname
 - �ǿ�Լ��
ALTER TABLE employees_Ambrose MODIFY(eid NUMBER(6) NOT NULL)
 - Ψһ��Լ��
CREATE TABLE employees2_Ambrose(
  eid NUMBER(6) UNIQUE,
  name VARCHAR2(30),
  email VARCHAR2(50), 
  salary NUMBER(7,2) ,  
  hiredate DATE,
  CONSTRAINT employees2_Ambrose_email_uk UNIQUE(email))
 - ����Լ����PRIMARY KEY
һ�ű�ֻ����һ���ֶζ�������Լ��������Լ��Ҫ����ֶηǿ���Ψһ��
CREATE TABLE employees3_Ambrose (
  eid NUMBER(6) PRIMARY KEY,
  name VARCHAR2(30),
  email VARCHAR2(50),
  salary NUMBER(7,2),
  hiredate DATE)
 - �Զ���Լ��
ALTER TABLE employees3_Ambrose ADD CONSTRAINTemployees3_Ambrose_salary
CHECK (salary>2000)

 - ����������ͼ
CREATE OR REPLACE VIEW view_Abmrose
���õ����ݿ��ֵ�
USER_OBJECTS :��¼�û����������������ݿ����
SELECT object_name,object_type FROM user_objects
WHERE object_type='VIEW'
AND object_name LIKE '%view_Ambrose%'

USER_VIEWS:ר�ż�¼��������������ͼ��Ϣ
SELECT view_name,text FROM user_views

USER_TABLES:ר�ż�¼�����������ı����Ϣ
SELECT table_name FROM user_tables

ɾ����ͼ
DROP VIEW view_Ambrose
-------------------------���õ����ݿ��ֵ�---------------------------
USER_OBJECTS :��¼�û����������������ݿ����
SELECT object_name,object_type FROM user_objects
WHERE object_type='VIEW'
AND object_name LIKE '%view_Ambrose%'

USER_VIEWS:ר�ż�¼��������������ͼ��Ϣ
SELECT view_name,text FROM user_views

USER_TABLES:ר�ż�¼�����������ı����Ϣ
SELECT table_name FROM user_tables

ɾ����ͼ
DROP VIEW view_Ambrose
---------------------------SQL���ز���----------------------------
�ȹ鵵���ٿ�������
select flashback_on from v$database  --yes/no




