function merge_sort(array) {
    // # If the input array contains fewer than two elements,
    // # then return it as the result of the function
    // if (len(array) < 2) {
    if (array.length < 2) {
        return array
    }

    // == //
    // var midpoint = len(array) // 2
    var midpoint = array.length

    // # Sort the array by recursively splitting the input
    // # into two equal halves, sorting each half and merging them
    // # together into the final result
    // ==> //
    // return merge(
    //     left = merge_sort(array[: midpoint]),
    //     right = merge_sort(array[midpoint:]))
    return merge(left = merge_sort(array.slice(0, midpoint), right = merge_sort(array.slice(midpoint, array.length))))
}


function timsort(array) {
    var min_run = 32
    // var n = len(array)
    var n = array.length;

    // # Start by slicing and sorting small portions of the
    // # input array. The size of these slices is defined by
    // # your `min_run` size.
    for (i in range(0, n, min_run)) {
        insertion_sort(array, i, min((i + min_run - 1), n - 1))
    }


    // # Now you can start merging the sorted slices.
    // # Start from `min_run`, doubling the size on
    // # each iteration until you surpass the length of
    // # the array.
    var size = min_run
    while (size < n) {
        // # Determine the arrays that will
        // # be merged together
        for (start in range(0, n, size * 2)) {
            // # Compute the `midpoint` (where the first array ends
            // # and the second starts) and the `endpoint` (where
            // # the second array ends)
            var midpoint = start + size - 1
            var end = min((start + size * 2 - 1), (n - 1))

            // # Merge the two subarrays.
            // # The `left` array should go from `start` to
            // # `midpoint + 1`, while the `right` array should
            // # go from `midpoint + 1` to `end + 1`.
            // == //
            // merged_array = merge(
            //     left = array[start: midpoint + 1],
            //     right = array[midpoint + 1: end + 1])
            merged_array = merge(left = array.slice(start, midpoint + 1), right = array.slice([midpoint + 1, end + 1]))

            // # Finally, put the merged array back into
            // # your array
            // == //
            // array[start: start + len(merged_array)] = merged_array

            array = [...array.splice(0, start), ...merged_array, ...array.splice(start + merged_array.length, array.length)];
        }

    }


    // # Each iteration should double the size of your arrays
    size *= 2

    return array
}


function insertion_sort(array, left = 0, right = null) {
    if (right === null) {
        // right = len(array) - 1
        right = array.length - 1
    }


    // # Loop from the element indicated by
    // # `left` until the element indicated by `right`
    for (i in range(left + 1, right + 1)) {
        // # This is the element we want to position in its
        // # correct place
        var key_item = array[i]

        // # Initialize the variable that will be used to
        // # find the correct position of the element referenced
        // # by `key_item`
        j = i - 1

        // # Run through the list of items (the left
        // # portion of the array) and find the correct position
        // # of the element referenced by `key_item`. Do this only
        // # if the `key_item` is smaller than its adjacent values.
        while (j >= left && array[j] > key_item) {
            // # Shift the value one position to the left
            // # and reposition `j` to point to the next element
            // # (from right to left)
            array[j + 1] = array[j]
            j -= 1
        }


        // # When you finish shifting the elements, position
        // # the `key_item` in its correct location
        array[j + 1] = key_item
    }


    return array
}


