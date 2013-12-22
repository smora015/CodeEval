/*
  (c) Sergio Morales 2013
  CodeEval Challenge: Longest Words
  Date Solved: 12/22/13
*/

import java.io.*

public class Main {
    public static void main (String[] args) throws IOException {
        File file = new File( args[0]);
        BufferedReader in = new BufferedReader(new FileReader(file));
        String line;
        while( (line = in.readLine()) != null) {
            String[] lineArray = line.split(" ");
            Integer largestIndex = 0;
            if(lineArray.length > 0) {
                for(int i = 0; i < lineArray.length; ++i) {
                    if(lineArray[largestIndex].length() < lineArray[i].length())
                        largestIndex = i;
                }
            }
            System.out.println(lineArray[largestIndex]);
        }
    }
}
