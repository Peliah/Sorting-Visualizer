// make the page load before anything else
document.addEventListener('DOMContentLoaded', function () {


    // variable declaration
    let bars, speed;
    let array = [];
    var interval = 0;
    var i = 1;


    // Create elements
    const main = document.createElement('div');
    main.classList.add('main');

    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.innerHTML = `<img src="../../assets/logoLight.png" height="40" width="40" alt="logo"/>
    <a href="https://pelayah-portfolio.vercel.app" target="_blank" style="text-decoration:none; color:inherit"><h4>&copy;Peliah</h4></a>`

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

    const refreshBtn = document.createElement('button');
    refreshBtn.classList.add('btn');
    refreshBtn.innerHTML = `<img src="../../assets/refresh.png" height="35" width="35" alt="logo" />`

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
    button_container.appendChild(refreshBtn);


    if (window.innerWidth <= 700) {
        bars = 50;
        speed = 300;

        header.style.fontSize = '1.5rem';
        button_container.style.gap = '10px'
        const buttons = document.querySelectorAll('.btn');

        for (const btn of buttons) {
            btn.style.padding = '3px 5px';
            btn.style.fontSize = '.9rem';
            btn.style.borderRadius = '5px';

        }
    } else {
        bars = 70,
            speed = 100;
        button_container.style.width = '70vw'
    }

    // generate a random array with a size
    const generateRandomArray = () => {
        clearInterval(interval);
        i = 1;
        array = []
        for (let index = 0; index < bars; index++) {
            array.push(Math.floor(Math.random() * 55) + 1);
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
            bar.style.height = array[i] + `vh`
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
    // function partition(arr, low, high) {
    //     let pivot = arr[high];

    //     let i = low - 1;

    //     for (let j = low; j <= high - 1; j++) {
    //         // If current element is smaller than the pivot
    //         if (arr[j] < pivot) {
    //             // Increment index of smaller element
    //             i++;
    //             [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    //         }
    //     }
    // }

    function partition(arr, low, high) {
        let pivot = arr[high];
        let i = low - 1;
        let j = low;

        let interval = setInterval(() => {
            if (j <= high - 1) {
                if (arr[j] < pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
                    displayBars(arr); // Display bars after each swap
                }
                j++;
            } else {
                clearInterval(interval);
                i++;
                [arr[i], arr[high]] = [arr[high], arr[i]]; // Swap pivot to its correct position
                displayBars(arr); // Display bars after pivot swap
                // Call quickSort recursively for the left and right partitions
                quickSort(arr, low, i - 1);
                quickSort(arr, i + 1, high);
            }
        }, 200);

        return i;
    }

    function quickSort(arr, low, high) {
        if (low < high) {

            // pi is partitioning index, arr[p]
            // is now at right place
            pi = partition(arr, low, high);

            // Separately sort elements before
            // partition and after partition
            // quickSort(arr, low, pi - 1);
            // quickSort(arr, pi + 1, high);
            displayBars(arr)
            console.log(arr);
        }
    }


    function merge(arr, l, m, r) {
        var n1 = m - l + 1;
        var n2 = r - m;

        // Create temp arrays
        var L = new Array(n1);
        var R = new Array(n2);

        // Copy data to temp arrays L[] and R[]
        for (var i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (var j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];

        // Merge the temp arrays back into arr[l..r]

        // Initial index of first subarray
        var i = 0;

        // Initial index of second subarray
        var j = 0;

        // Initial index of merged subarray
        var k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }


    function mergeSort(arr, l, r) {
        if (l >= r) {
            return;
        }
        var m = l + parseInt((r - l) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }


    generateArrayBtn.addEventListener("click", generateRandomArray);
    insertionBtn.addEventListener("click", () => interval = setInterval(() => insertionSort(array), speed));
    displayBars(array)
    console.log(window.innerWidth);
    refreshBtn.addEventListener('click', () => {
        window.location.reload();
    });
    quickBtn.addEventListener("click", () => quickSort(array, 0, bars - 1))
    mergeBtn.addEventListener("click", () => mergeSort(array, 0, bars - 1))
});
