/*
  (c) Sergio Morales
  CodeEval Challenge: Swap Elements
  Date Solved: 12/20/13
*/

import java.io.*;

public class Main {
    public static void main (String[] args) throws java.io.IOException {
        File file = new File(args[0]);
        BufferedReader in = new BufferedReader(new FileReader(file));
        
        String line = "";
        while (( line = in.readLine() ) != null) {
            if (line.length() > 0) {
                String[] numArray = line.substring(0, line.indexOf(":")).split(" ");
                String[] swapArray = line.substring(line.indexOf(":")+1).split(",");
                
                for(int i = 0; i < numArray.length; ++i)
                    System.out.print(numArray[i]+" ");
                System.out.println();
                // Print num length
                //System.out.println(numArray.length);
                for(int i = 0; i < swapArray.length; ++i) {
                    String[] swaps = swapArray[i].split("-");
                    Integer firstswap = Integer.parseInt(swaps[0].substring(1));
                    Integer secondswap = Integer.parseInt(swaps[1]);
                    String temp = numArray[firstswap];
                    numArray[firstswap] = numArray[secondswap];
                    numArray[secondswap] = temp;
                }
                
                for(int i = 0; i < numArray.length; ++i)
                    System.out.print(numArray[i]+" ");
                System.out.println("\n");
            }
        }
  }
}
