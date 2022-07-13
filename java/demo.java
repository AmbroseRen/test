import java.text.SimpleDateFormat;
import java.util.Date;
 
public class Main{
    public static void main(String[] args){
        
        SimpleDateFormat sdf = new SimpleDateFormat();// 格式化时间 
        sdf.applyPattern("yyyy-MM-dd HH:mm:ss a");// a为am/pm的标记  
        Date date = new Date();// 获取当前时间
        String sDate = sdf.format(date);
        System.out.println("现在时间：" + sDate); // 输出已经格式化的现在时间（24小时制）
     
        DateTimeFormatter fmTime = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        System.out.println("当前时间:"+now.format(fmTime));
        //2小时前
        LocalDateTime pro2hour = LocalDateTime.now().minus(2, ChronoUnit.HOURS);
        System.out.println("2小时前:"+pro2hour.format(fmTime));     
    } 
}
