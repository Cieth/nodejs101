import { faker } from '@faker-js/faker';
import * as fs from 'fs';

function createRealNames(){
    try {
        var write = fs.createWriteStream("totallyRealNames.txt");
        for(var h = 0; h < 20; h++){
            for(var i = 0; i < 50; i++) {
                write.write(faker.name.firstName()+",");
            }
            write.write("\n");
        }
        write.end();
    } catch (error) {
        console.log(error)
    }
    
}

createRealNames()
