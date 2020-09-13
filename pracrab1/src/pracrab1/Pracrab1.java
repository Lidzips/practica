
package pracrab1;

public class Pracrab1 {

    public static void main(String[] args) {
        // задаем окна прямоугольниками по координатам левой нижней и правой верхних точек
        //             x1  x2   y1   y2
      /*double w1[] = {25, 375, 25, 275};  //окно 1
        double w2[] = {50, 350, 50, 250};
        double w3[] = {75, 325, 75, 200};
        double w4[] = {100, 100, 25, 225};
        double w5[] = {175, 275, 125, 200};
        double windows[][]  = {w1, w2, w3, w4, w5};
        int winNum = -1;*/
        int hlp = 0;
        double x = -1;
        double y = -1;
        Rectangle[]r = new Rectangle[3];
        r[0] = new Rectangle(0, 25, 25, 300, 300);
        r[1] = new Rectangle(1, 45, 50, 220, 240);
        r[2] = new Rectangle(2, 70, 80, 140, 160);
        
        if (args.length == 0) {
            System.out.println("Программа app");
            System.out.println("Калугин Игорь 2020");
            System.out.println("Вызов: app -x ... -y ...");
            System.out.println("-x - координаты x точки");
            System.out.println("-y - координаты y точки");
            System.out.println("-h, -help, -? - справка");
        }
        else {
            System.out.println("Список введеных параметров: ");
        }
        for (int i = 0; i < args.length; i++) {
            if(args[i].equals("-h") || args[i].equals("-help") || args[i].equals("-?")) {
                hlp = 1;
            }
            
            System.out.println(args[i]);

            if(args[i].toLowerCase().equals("-x")){
                try {
                    x = Double.parseDouble(args[i+1]);
                } catch (NumberFormatException e) {
                    System.out.println("Ошибка ввода числа x: " + args[i+1] + "задан неверно, десятичные числа вводятся через точку");
                    return;
                }
            }
            
            if(args[i].toLowerCase().equals("-y")){
                try {
                    y = Double.parseDouble(args[i+1]);
                } catch (NumberFormatException e) {
                     System.out.println("Ошибка ввода числа y: " + args[i+1] + "задан неверно, десятичные числа вводятся через точку");
                    return;
                }   
            }
        }   
        if (hlp == 1) {
            help();
        }
        if((x != -1) && (y != -1)) {
            System.out.println("Выбраны координаты x: " + x +" y: " + y);
          /*for (int j = windows.length - 1; j > -1; j--) {
                if ((x > windows[j][0]) && (x < windows[j][1]) && (y > windows[j][2] ) && (y < windows[j][3])) {
                    winNum = j+1;
                    System.out.println("Выбрано окно №"+ winNum);
                    return;
                }
            }
            System.out.println("desktop");*/
            for (int i = r.length - 1; i > -1; i--) {
                if(x >= r[i].lX && x <= r[i].rX && y >= r[i].lY && y <= r[i].rY) {
                    System.out.println("Выбрано окно №" + r[i].rectNum);
                    return;   
                }
            } 
            System.out.println("desktop");
            
        }
        if(x != -1 && y == -1) {
            System.out.println("Число y не было задано");
        }
        if(x == -1 && y != -1) {
            System.out.println("Число x не было задано");
        }
    }
    public static void help() {
        System.out.println("Чтобы выбрать окно введите координаты вида: -x double -y double");
    }
    
}
