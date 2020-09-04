package AmbroseRen.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintStream;
import java.lang.reflect.Array;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.text.Format;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

import com.jacob.activeX.ActiveXComponent;
import com.jacob.com.Dispatch;
import com.jacob.com.Variant;

//import oracle.net.aso.i;

/**  
*   
* 项目名称：AmbroseRen  
* 类名称：Tools  
* 类描述：  
* 创建人：Administrator  
* 创建时间：2018年12月3日 上午9:03:18  
* @version       
*/ 
public class Tools {
	
	
	
	//截取指定字段字符串
	public static String subString(String str, String strStart, String strEnd) {

		/* 找出指定的2个字符在 该字符串里面的 位置 */
		int strStartIndex = str.indexOf(strStart);
		int strEndIndex = str.indexOf(strEnd);

		/* index 为负数 即表示该字符串中 没有该字符 */
		if (strStartIndex < 0) {
			return "字符串 :---->" + str + "<---- 中不存在 " + strStart + ", 无法截取目标字符串";
		}
		if (strEndIndex < 0) {
			return "字符串 :---->" + str + "<---- 中不存在 " + strEnd + ", 无法截取目标字符串";
		}
		/* 开始截取 */
		String result = str.substring(strStartIndex, strEndIndex).substring(strStart.length());
		return result;
	}
	
	//16进制String 转 2进制byte[]
	public static byte[] hexStringToByteArray(String s) {
        int len = s.length();
        byte[] data = new byte[len / 2];
        try {
            for (int i = 0; i < len; i += 2) {
                data[i / 2] = (byte) ((Character.digit(s.charAt(i), 16) << 4)
                        + Character.digit(s.charAt(i+1), 16));
            }
        } catch (Exception e) {
            //Log.d("", "Argument(s) for hexStringToByteArray(String s)"+ "was not a hex string");
        }
        return data;
    }
	
	//2进制byte[] 转16进制String
	public static String byte2HexString(byte[] bytes) {
        String hex= "";
        if (bytes != null) {
            for (Byte b : bytes) {
            	//%02x  (x代表以十六进制形式输出,02代表不足两位，前面补0输出，如果超过两位，则以实际输出)
            	//&0xff	补位运算，防止溢出，在运算前会转成整形参与运算
                hex += String.format("%02X", b.intValue() & 0xFF);
            }
        }
        return hex;
    }
	
	//二进制字符串 转换为 byte[],每个字节以","隔开
	public static byte[] binStrToByteArr(String binStr) {
	    String[] temp = binStr.split(",");
	    byte[] b = new byte[temp.length];
	    for (int i = 0; i < b.length; i++) {
	        b[i] = Long.valueOf(temp[i], 2).byteValue();
	    }
	    return b;
	}
	
	//byte[] 转换为 二进制字符串,每个字节以","隔开
	public static String byteArrToBinStr(byte[] b) {
	    StringBuffer result = new StringBuffer();
	    for (int i = 0; i < b.length; i++) {
	        result.append(Long.toString(b[i] & 0xff, 2) + ",");
	    }
	    return result.toString().substring(0, result.length() - 1);
	}
	
	//字符串转换unicode
	public static String string2Unicode(String string) {
		StringBuffer unicode = new StringBuffer();
		for (int i = 0; i < string.length(); i++) {
		    char c = string.charAt(i);
		    // 转换为unicode
		    unicode.append("\\u" + Integer.toHexString(c));
		}
		return unicode.toString();
	}
	//unicode 转字符串
	public static String unicode2String(String unicode) {
	    StringBuffer string = new StringBuffer();
	    String[] hex = unicode.split("\\\\u");
	    for (int i = 1; i < hex.length; i++) {
	        // 转换出每一个代码点
	        int data = Integer.parseInt(hex[i], 16);
	        // 追加成string
	        string.append((char) data);
	    }
	    return string.toString();
	}
	//字符串 转 16进制
	public static String strTo16(String s) {
	    String str = "";
	    for (int i = 0; i < s.length(); i++) {
	        int ch = (int) s.charAt(i);
	        String s4 = Integer.toHexString(ch);
	        str = str + s4;
	    }
	    return str;
	}
	//字符串转换成为16进制(无需Unicode编码)
	public static String str2HexStr(String str) {
	    char[] chars = "0123456789ABCDEF".toCharArray();
	    StringBuilder sb = new StringBuilder("");
	    byte[] bs = str.getBytes();
	    int bit;
	    for (int i = 0; i < bs.length; i++) {
	        bit = (bs[i] & 0x0f0) >> 4;
	        sb.append(chars[bit]);
	        bit = bs[i] & 0x0f;
	        sb.append(chars[bit]);
	        // sb.append(' ');
	    }
	    return sb.toString().trim();
	}
	//16进制转换成为string类型字符串
	public static String hexStringToString(String s) {
	    if (s == null || s.equals("")) {
	        return null;
	    }
	    s = s.replace(" ", "");
	    byte[] baKeyword = new byte[s.length() / 2];
	    for (int i = 0; i < baKeyword.length; i++) {
	    	try {
	    		 baKeyword[i] = (byte) (0xff & Integer.parseInt(s.substring(i * 2, i * 2 + 2), 16));
			} catch (Exception e) {
				e.printStackTrace();
			}
	    }
	    try {
	        s = new String(baKeyword, "UTF-8");
	        new String();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return s;
	}
	//16进制直接转换成为字符串(无需Unicode解码)
	public static String hexStr2Str(String hexStr) {
	    String str = "0123456789ABCDEF";
	    char[] hexs = hexStr.toCharArray();
	    byte[] bytes = new byte[hexStr.length() / 2];
	    int n;
	    for (int i = 0; i < bytes.length; i++) {
	        n = str.indexOf(hexs[2 * i]) * 16;
	        n += str.indexOf(hexs[2 * i + 1]);
	        bytes[i] = (byte) (n & 0xff);
	    }
	    return new String(bytes);
	}
	
	//读取IC卡
	public  void readCard(){
		ActiveXComponent component1=new ActiveXComponent("ATMCRWIO.SIMCard");
		Dispatch disp1 = (Dispatch) component1.getObject();
		Variant variant1=Dispatch.call(disp1, "ReadOperID");
		System.out.println(variant1);
		
		ActiveXComponent component2=new ActiveXComponent("ATMCRWIO.MeterCard");
		Dispatch disp2 = (Dispatch) component2.getObject();
		Variant variant2=Dispatch.call(disp2, "ReadCard",0);
	//	Variant variant2=component2.invoke("ReadCard",0);
		System.out.println(variant2);
		//mid(rs,3,5) 是字符串截取的意思
		Variant result3 = Dispatch.call(disp2, "WriteCard", null,null,null);
		System.out.println(result3);
	}
	
	//URL网址 调用，传入URL和参数,如下示例
	/**  String resultString = Tools.load(
  		"http://192.168.10.89:8080/eoffice-restful/resources/sys/oaholiday",
  		"floor=first&year=2017&month=9&isLeader=N");*/
	public static String load(String url,String query) throws Exception{
        URL restURL = new URL(url);
        /*
         * 此处的urlConnection对象实际上是根据URL的请求协议(此处是http)生成的URLConnection类 的子类HttpURLConnection
         */
        HttpURLConnection conn = (HttpURLConnection) restURL.openConnection();
        //请求方式
        conn.setRequestMethod("POST");
        //设置是否从httpUrlConnection读入，默认情况下是true; httpUrlConnection.setDoInput(true);
        conn.setDoOutput(true);
        //allowUserInteraction 如果为 true，则在允许用户交互（例如弹出一个验证对话框）的上下文中对此 URL 进行检查。
        conn.setAllowUserInteraction(false);

        PrintStream ps = new PrintStream(conn.getOutputStream());
        ps.print(query);

        ps.close();

        BufferedReader bReader = new BufferedReader(new InputStreamReader(conn.getInputStream()));

        String line,resultStr="";

        while(null != (line=bReader.readLine())) {
        		resultStr +=line;
        }
        System.out.println("3412412---"+resultStr);
        bReader.close();

        return resultStr;

    }
	
	/**
	 * HMAC-SHA1 签名源码
	 * @param data
	 * @param key
	 * @return
	 */
	public static String hamcsha(byte[] data, byte[] key)
	{
	 try {
		 SecretKeySpec signingKey = new SecretKeySpec(key, "HmacSHA1");
		 Mac mac = Mac.getInstance("HmacSHA1");
		 mac.init(signingKey);
		 return byte2hex(mac.doFinal(data));
	 } catch (NoSuchAlgorithmException e) {
		 e.printStackTrace();
	 } catch (InvalidKeyException e) {
		 e.printStackTrace();
	 }
		 return null;
	}	
	public static String byte2hex(byte[] b){
		 StringBuilder hs = new StringBuilder();
		 String stmp;
		 for (int n = 0; b!=null && n < b.length; n++) {
			 stmp = Integer.toHexString(b[n] & 0XFF);
			 if (stmp.length() == 1)
			 hs.append('0');
			 hs.append(stmp);
		 }
		 return hs.toString().toUpperCase();
	}	
	
	/**
	 * 转int修改字符串
	 * @param str 
	 * @return
	 */
	public static String SIS(String str){
		String nextDayNum =String.valueOf(Integer.parseInt(str.substring(str.length() -1, str.length()))+1);
		StringBuffer buffer = new StringBuffer(str);
		String newStr =(buffer.replace(str.length()-1, str.length(), nextDayNum)).toString();
		return newStr;
	}
	
	/**
	 * 字符串取明天时间（根据输入日期长度取格式）
	 * @param time
	 * @return
	 * @throws ParseException 
	 */
	public static String STS(String begindate) throws ParseException{		
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
		Date date=null; 
		 date=sdf.parse(begindate); 
		
		 Calendar c = Calendar.getInstance();
		 c.setTime(date);
		 c.add(Calendar.DAY_OF_MONTH, 1);
		 
		 Format f = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		 String tomorrow =f.format(c.getTime());
		return tomorrow;
	}
	
	/**
	 * 取下月时间
	 * @param begindate
	 * @return
	 * @throws ParseException
	 */
	public static String SMS(String begindate) throws ParseException{		
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
		Date date=null; 
		 date=sdf.parse(begindate); 
		
		 Calendar c = Calendar.getInstance();
		 c.setTime(date);
		 c.add(Calendar.MONTH, 1);
		 
		 Format f = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		 String nextMonth =f.format(c.getTime());
		return nextMonth;
	}
	
	//范围质数数组
	public static ArrayList PrimeNumber(int beginNum,int endNum){
		int count=0;
		ArrayList<Integer> array =new ArrayList<Integer>();
		for(int a=beginNum;a<=endNum;a++){//遍历范围		
			boolean flag =true;//开关判断		
			for(int i=2;i<=Math.sqrt(a);i++){//判断质数					//条件	
				if(a% i ==0){
					flag=false;     break;				
				}
			} 
			
			if(flag==true){//==true不用写
				System.out.print(a+"\t");
				array.add(a);
				count++;
				if(count%10==0){
					System.out.println();//够10换行
				}					
			}

		}
		
		return array;
	}
	
    /**
     *
     * @param a
     *            被匹配的长字符串
     * @param b
     *            匹配的短字符串
     * @return 匹配次数
     */
    public int hit(String a, String b) {
        if (a.length() < b.length()) {
            return 0;
        }
        char[] a_t = a.toCharArray();
        int count = 0;
 
        for (int i = 0; i < a.length() - b.length(); i++) {
            StringBuffer buffer = new StringBuffer();
            for (int j = 0; j < b.length(); j++) {
                buffer.append(a_t[i + j]);
            }
            if(buffer.toString().equals(b)){
                count ++;
            }
        }
 
        return count;
    }
	
    /**
     * 使用取值实例：
      String[] ArrayID = { "name", "value", "css" };
      String[] arr0 =ArrayAdd(ArrayID, "name1", "value1", "css1");
      String[] arr1 =ArrayAdd(ArrayID, "name2", "value2", "css2");
      //arr0[0]为所传name数组，arr0[1]为所传value数组，arr0[2]为所传css数组
      String arr0_name =arr0[0].split(",")[1];
      String arr0_value =arr0[1].split(",")[1];
      String arr0_css =arr0[2].split(",")[1];
     * 
     * @param ArrayID
     * @param name
     * @param value
     * @param css
     * @return
     * @throws Exception
     */
    public static String[] ArrayAdd(String[] ArrayID,String name,String value,String css) throws Exception{
        ArrayID[0]=ArrayID[0]+","+name;
        ArrayID[1]=ArrayID[1]+","+value;
        ArrayID[2]=ArrayID[2]+","+css;
        return ArrayID;
    }
    
}
