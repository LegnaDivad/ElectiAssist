package com.exampleElecti.Electi.service;

/*
*
* @Author: Juan Cervantes
* @Date: 1/23/2025
* @About: Service to implement python phe script
*
* */

import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

@Service
public class PythonService {

    public String phePython(String data, String path){
        try{
            /*
            * Process Builder class:
            * Creates an instance process to manage system operations, can be used for control the process and obtain information about it
            *
            * CREATES THE PROCESS
            * */
            ProcessBuilder processBuilder = new ProcessBuilder("python", path,data);//Creates the instance with the the path and data
            processBuilder.redirectErrorStream(true);//Both IO messages will be sent on the same stream

            Process process = processBuilder.start(); //Start the process

            //Tries to write the data on the inputStream direct to python file
            try(BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(process.getOutputStream()))){
                writer.write(data);
                writer.newLine();
                writer.flush();
            }

            //Get the output of the process
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));

            //A stringBuilder (super string constructor, less resources taken)
            StringBuilder output = new StringBuilder();

            String line;
            while((line = reader.readLine())!=null){//While the file its not at the end of file
                output.append(line).append("\n");//The stringBuilder will append the code in the python script
            }

            process.waitFor();//Waits till the subProcess ends its cycle

            return output.toString().trim();//Returns the output of the process


        } catch(Exception e){//Fallback in case of error
            e.printStackTrace();
            return null;
        }
    }

}
