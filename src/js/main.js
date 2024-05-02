// make the page load before anything else
document.addEventListener('DOMContentLoaded', function () {

    // variable declaration
    let bars = 500;
    let array = [];
    var interval = 0;
    var i = 1;
    // Create elements
    const main = document.createElement('div');
    main.classList.add('main');

    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = `<img src="../../assets/logoLight.png" height="40" width="40" alt="logo"/>
    <h4>&copy;Peliah</h4>`

    const header = document.createElement('header');
    header.classList.add('header');
    header.innerText = "Sorting Algorithm Visualiser"

    const bar_container = document.createElement('div');
    bar_container.classList.add('bar_container');

    const button_container = document.createElement('div');
    button_container.classList.add('button_container');

    const bar = document.createElement('div');
    bar.classList.add('bar');

    const generateArrayBtn = document.createElement('button');
    generateArrayBtn.classList.add('btn');
    generateArrayBtn.innerText = "Generate array"

    const insertionBtn = document.createElement('button');
    insertionBtn.classList.add('btn');
    insertionBtn.innerText = "Insertion sort"

    const mergeBtn = document.createElement('button');
    mergeBtn.classList.add('btn');
    mergeBtn.innerText = "Merge sort"

    const quickBtn = document.createElement('button');
    quickBtn.classList.add('btn');
    quickBtn.innerText = "Quick sort"

    // Append elements to the main container
    const container = document.querySelector('.container');
    container.appendChild(header);
    container.appendChild(main);
    container.appendChild(footer);
    main.appendChild(bar_container);
    main.appendChild(button_container);
    button_container.appendChild(generateArrayBtn);
    button_container.appendChild(insertionBtn);
    button_container.appendChild(quickBtn);
    button_container.appendChild(mergeBtn);

    // generate a random array with a size
    const generateRandomArray = () => {
        clearInterval(interval);
        i=1;
        array = []
        for (let index = 0; index < bars; index++) {
            array.push(Math.floor(Math.random() * 500) + 1);
            displayBars(array)
        }
        console.log(array);
    }

    // display the array
    const displayBars = (array) => {
        bar_container.innerHTML = "";
        for (let i = 0; i < array.length; i++) {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.id = i;
            bar.style.height = array[i] + `px`
            bar.style.transition = 'height 0.5s ease-in-out';
            bar_container.appendChild(bar);
        }
    }

    //create the buttons
    //insertion sort
    
    function insertionSort(arr) {
        console.log(arr);
        // displayBars(arr)
        // const barr = document.getElementById(i);
        // if (i == 0) {
        //     barr.classList.remove("bar");
        //     barr.classList.add("bar-highlight");
        //     console.log(i);
        //     i++
        // } else if (i < arr.length) {
        //     const prevBar = document.getElementById(i - 1);
        //     prevBar.classList.remove("bar-highlight");
        //     prevBar.classList.add("bar");
        //     barr.classList.remove("bar");
        //     barr.classList.add("bar-highlight");
        //     console.log(i);
        //     i++
        // } else { i = 0; clearInterval(interval); }

        let currentElement = arr[i];
        let lastIndex = i - 1;

        if (i < arr.length) {
            while (lastIndex >= 0 && arr[lastIndex] > currentElement) {
                arr[lastIndex + 1] = arr[lastIndex];
                lastIndex--;
                displayBars(arr)
            }
            arr[lastIndex + 1] = currentElement;
            i++;
        } else { clearInterval(interval); i = 1; }
    }


    //selection sort

    // bubble sort

    // merge sort

    // quick sort


    generateArrayBtn.addEventListener("click", generateRandomArray);
    insertionBtn.addEventListener("click", () => interval = setInterval(() => insertionSort(array), 100));
    displayBars(array)
});