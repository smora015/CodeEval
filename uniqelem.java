/** 
  (c) Sergio Morales 2013
  CodeEval Challenge: Unique Elements
  Dated Solved: 12/22/13
**/

import java.io.*;


public class Main {
    public static boolean found(String item, String[] list) {
        for(int i = 0; i < list.length; ++i) {
        if(list[i] != null && list[i].equals(item)) {
                return true;   
            }
        }
        
        return false;
}


    public static void main (String[] args) throws IOException {
        File file = new File(args[0]);
        BufferedReader in = new BufferedReader(new FileReader(file));
        String line;
        
        while( (line = in.readLine()) != null) {
            String[] lineArray = line.split(",");
            String[] uniqueArray = new String[lineArray.length];
            Integer count = 0;
            
            for(int i = 0; i < lineArray.length; ++i) {
                    if(!found(lineArray[i], uniqueArray)) {
                        uniqueArray[count] = lineArray[i];
                        ++count;
                    }
            }
            for(int i = 0; i < uniqueArray.length; ++i) {
                if(uniqueArray[i] != null) {
                    System.out.print(uniqueArray[i]);
                    if( (i+1 < uniqueArray.length-1) ) {
                        if(uniqueArray[i+1] != null) {
                            System.out.print(",");
                        }
                    }
                }
            }
            
            System.out.println();
        }
    }   
    
    
}
