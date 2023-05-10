// make a function that adds a function row to the table

let add_func_btn =  document.getElementById('add-func-btn');
let func_box = document.getElementById('functions-list');

let func_win_counter = 1;
function add_func_window() {

    // add the function row

    let func_html = '<div id = "function-'+(func_win_counter+1)+'" class="flex my-1 ">\
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">\
                        <input checked id="func'+(func_win_counter+1)+'-box" type="checkbox" value="" class="func-checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">\
                    </span>\
                    <input type="text" id="func-'+(func_win_counter+1)+'" class="rounded-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">\
                    <button type="button" onclick ="remove_func_window()" class="inline-flex items-center px-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-0 rounded-r-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">x</button>\
                    </div>';

    func_box.insertAdjacentHTML('beforeend', func_html);
    func_win_counter++;
    return;
}


function remove_func_window() {
    // get the id of the function window of which the cross button is pressed 
    let parentDiv = event.target.parentNode;

    // remove the function window
    parentDiv.remove();
    func_win_counter--;
    return;
}








  