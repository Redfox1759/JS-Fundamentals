const args = process.argv.slice(2);
const num = parseInt(args[0],10);

if (isNaN(num) || !num){
    console.log("Missing size")
} else if (num > 0){
    for (let i = 0; i < num; i++){
        let row = "X".repeat(num)
        console.log(row)
    }   
}