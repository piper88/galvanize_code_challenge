var array = ['674', '111', '348']

function return_split_array(arr) { //split string
    var array_of_arrays = [];
    for (i=0; i<arr.length; i++) {
        array_of_arrays[i] = arr[i].split("");
        }
    return array_of_arrays;
}

var array2 = return_split_array(array);
console.log(array2);




var array3 = [];

function add_numbers(arr) {
    for(i=0; i<array.length; i++) {
        
        for (j=0; j<arr[i].length; j++) {
            var total1 = parseInt(arr[0][0]) + parseInt(arr[0][1]) + parseInt(arr[0][2]);
            var total2 = parseInt(arr[1][0]) + parseInt(arr[1][1]) + parseInt(arr[1][2]);
            var total3 = parseInt(arr[2][0]) + parseInt(arr[2][1]) + parseInt(arr[2][2]);
            array3[0] = total1;
            array3[1] = total2;
            array3[2] = total3;
        }
        
    }
    return array3;
}

add_numbers(array)