# Algorithms

## Table of Contents

- [Algorithms](#algorithms)
  - [Table of Contents](#table-of-contents)
  - [Notes](#notes)
  - [Useful Links](#useful-links)
  - [Big O](#big-o)
    - [Big O in a Nutshell](#big-o-in-a-nutshell)
    - [Key Concepts](#key-concepts)
    - [Big O Complexity Chart](#big-o-complexity-chart)
    - [Big O Examples](#big-o-examples)
      - [O(1) - Constant](#o1---constant)
      - [O(n) - Linear](#on---linear)
      - [O(n^2) - Quadratic](#on2---quadratic)
      - [O(n^3) - Cubic](#on3---cubic)
      - [O(log n) - Logarithmic](#olog-n---logarithmic)
      - [O(n log n) - Linearithmic](#on-log-n---linearithmic)
      - [O(2^n) - Exponential](#o2n---exponential)
      - [O(n!) - Factorial](#on---factorial)
    - [Big O Cheat Sheet](#big-o-cheat-sheet)
      - [Common Big O Cases](#common-big-o-cases)
    - [Arrays](#arrays)
      - [Fixed-Size Arrays](#fixed-size-arrays)
      - [Dynamic Arrays](#dynamic-arrays)
    - [Big O of Dynamic Array Methods](#big-o-of-dynamic-array-methods)
    - [Big O of Fixed-Size Array Methods](#big-o-of-fixed-size-array-methods)
    - [Big O of Algorithms](#big-o-of-algorithms)
  - [Search](#search)
    - [Linear Search](#linear-search)
      - [Description](#description)
      - [Use Cases](#use-cases)
      - [Complexity](#complexity)
      - [Implementation](#implementation)
    - [Binary Search](#binary-search)
      - [Description](#description-1)
      - [Use Cases](#use-cases-1)
      - [Complexity](#complexity-1)
      - [Implementation](#implementation-1)
      - [The Two Crystal Balls Problem](#the-two-crystal-balls-problem)
        - [Binary Search Solution](#binary-search-solution)
        - [Square Root of N Approach](#square-root-of-n-approach)
  - [Sort](#sort)
    - [Bubble Sort](#bubble-sort)
      - [Description](#description-2)
      - [Complexity](#complexity-2)
      - [Implementation](#implementation-2)
    - [Quick Sort](#quick-sort)
      - [Description](#description-3)
      - [Complexity](#complexity-3)
      - [Implementation](#implementation-3)
    - [Merge Sort](#merge-sort)
      - [Description](#description-4)
      - [Complexity](#complexity-4)
      - [Implementation](#implementation-4)
  - [Data Structures](#data-structures)
    - [Linked Lists](#linked-lists)
      - [Description](#description-5)
      - [Characteristics](#characteristics)
      - [Real-World Examples](#real-world-examples)
      - [Interface](#interface)
      - [Complexity](#complexity-5)
      - [Implementation](#implementation-5)
    - [Doubly Linked Lists](#doubly-linked-lists)
      - [Description](#description-6)
      - [Interface](#interface-1)
      - [Complexity](#complexity-6)
      - [Implementation](#implementation-6)
    - [Queues](#queues)
      - [Description](#description-7)
      - [Real-World Examples](#real-world-examples-1)
      - [Interface](#interface-2)
      - [Complexity](#complexity-7)
      - [Implementation](#implementation-7)
    - [Stacks](#stacks)
      - [Description](#description-8)
      - [Real-World Examples](#real-world-examples-2)
      - [Interface](#interface-3)
      - [Complexity](#complexity-8)
      - [Implementation](#implementation-8)
    - [Arrays vs. Linked Lists](#arrays-vs-linked-lists)
    - [ArrayList](#arraylist)
      - [Description](#description-9)
      - [Characteristics](#characteristics-1)
      - [Real-World Examples](#real-world-examples-3)
      - [Interface](#interface-4)
      - [Complexity](#complexity-9)
      - [Implementation](#implementation-9)
    - [ArrayBuffers](#arraybuffers)
      - [Description](#description-10)
      - [Characteristics](#characteristics-2)
      - [Real-World Examples](#real-world-examples-4)
      - [Interface](#interface-5)
      - [Complexity](#complexity-10)
      - [Implementation](#implementation-10)
  - [Recursion](#recursion)
    - [Description](#description-11)
    - [Simple Example](#simple-example)
    - [Maze Example](#maze-example)
      - [Description](#description-12)
      - [Base Cases](#base-cases)
      - [Implementation](#implementation-11)
  - [Trees](#trees)
    - [Description](#description-13)
    - [Characteristics](#characteristics-3)
    - [Real-World Examples](#real-world-examples-5)
    - [Terminology](#terminology)
    - [Types of Traverse](#types-of-traverse)
    - [Binary Trees](#binary-trees)
      - [Interface](#interface-6)
      - [Complexity](#complexity-11)
      - [Implementation](#implementation-12)
  - [Tree Search](#tree-search)
    - [Breadth-First Search](#breadth-first-search)
      - [Description](#description-14)
      - [Characteristics](#characteristics-4)
      - [Implementation](#implementation-13)
    - [Depth-First Search](#depth-first-search)
      - [Description](#description-15)
      - [Characteristics](#characteristics-5)
      - [Implementation](#implementation-14)
    - [Compare Two Trees](#compare-two-trees)
      - [Description](#description-16)
      - [Why Breadth-First Search can't be used to compare the shape of the trees?](#why-breadth-first-search-cant-be-used-to-compare-the-shape-of-the-trees)
      - [Implementation 1 - Compare Values](#implementation-1---compare-values)
      - [Implementation 2 - Compare Values and Shape](#implementation-2---compare-values-and-shape)
    - [Binary Search Tree](#binary-search-tree)
      - [Description](#description-17)
      - [Implementation](#implementation-15)
  - [Binary Heap](#binary-heap)
    - [Description](#description-18)
    - [Real-World Examples](#real-world-examples-6)
    - [Characteristics](#characteristics-6)
    - [Interface](#interface-7)
    - [Complexity](#complexity-12)
    - [Implementation](#implementation-16)
  - [Trie Tree](#trie-tree)
    - [Description](#description-19)
    - [Real-World Examples](#real-world-examples-7)
    - [Interface](#interface-8)
    - [Complexity](#complexity-13)
    - [Implementation](#implementation-17)

## Notes

- There is a portuguese version of this file on the [README-pt-BR.md](README-pt-BR.md) file.

## Useful Links

- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)

## Big O

Big O notation is a way to categorize an algorithm's time or memory requirements based on its input size. It provides a high-level understanding of how an algorithm's performance scales as the input grows. While it doesn't give precise measurements in terms of CPU cycles, it helps us understand the general growth pattern of the algorithm.

#### Big O in a Nutshell

As the size of the input grows, how does the computational time or memory usage of the algorithm change?

#### Key Concepts

- **Constants Are Dropped:** In Big O analysis, constant factors and lower-order terms are ignored since they have less impact on the overall growth rate.
- **Worst Case Complexity:** Typically, the worst-case scenario is used to measure an algorithm's complexity.
- **Growth Relative to Input:** The Big O notation describes the growth of an algorithm's efficiency in relation to the size of the input.

#### Big O Complexity Chart

| Big O      | Name         |
| ---------- | ------------ |
| O(1)       | Constant     |
| O(log n)   | Logarithmic  |
| O(n)       | Linear       |
| O(n log n) | Linearithmic |
| O(n^2)     | Quadratic    |
| O(n^3)     | Cubic        |
| O(2^n)     | Exponential  |
| O(n!)      | Factorial    |

![Big O Chart](/images/big-o-face.png)

#### Big O Examples

##### O(1) - Constant

C#:

```csharp
void ConstantAlgorithm(int[] items) {
    int result = items[0] * items[0];
    Console.WriteLine(result);
}
```

##### O(n) - Linear

C#:

```csharp
void LinearAlgorithm(int[] items) {
    foreach (int item in items) {
        Console.WriteLine(item);
    }
}
```

##### O(n^2) - Quadratic

C#:

```csharp
void QuadraticAlgorithm(int[] items) {
    foreach (int item in items) {
        foreach (int item2 in items) {
            Console.WriteLine(item + " " + item2);
        }
    }
}
```

##### O(n^3) - Cubic

C#:

```csharpwonderful year with you. 😊 I wish everyone a relaxing and contemplative Christmas season and a good start to the em2 + " " + item3);
            }
        }
    }
}
```

##### O(log n) - Logarithmic

C#:

```csharp
void LogarithmicAlgorithm(int[] items) {
    for (int index = 0; index < items.Length; index += 3) {
        Console.WriteLine(items[index]);
    }
}
```

##### O(n log n) - Linearithmic

C#:

```csharp
using System;
using System.Collections.Generic;

public class MergeSortAlgorithm
{
    public static List<int> Merge(List<int> left, List<int> right)
    {
        List<int> result = new List<int>();
        int i = 0, j = 0;

        while (i < left.Count && j < right.Count)
        {
            if (left[i] < right[j])
            {
                result.Add(left[i]);
                i++;
            }
            else
            {
                result.Add(right[j]);
                j++;
            }
        }

        while (i < left.Count)
        {
            result.Add(left[i]);
            i++;
        }

        while (j < right.Count)
        {
            result.Add(right[j]);
            j++;
        }

        return result;
    }

    public static List<int> MergeSort(List<int> items)
    {
        if (items.Count <= 1)
        {
            return items;
        }

        int mid = items.Count / 2;
        List<int> left = items.GetRange(0, mid);
        List<int> right = items.GetRange(mid, items.Count - mid);

        return Merge(MergeSort(left), MergeSort(right));
    }
}
```

##### O(2^n) - Exponential

C#:

```csharp
int Fibonacci(int n) {
    if (n <= 1) {
        return n;
    } else {
        return Fibonacci(n-1) + Fibonacci(n-2);
    }
}
```

##### O(n!) - Factorial

C#:

```csharp
int Factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * Factorial(n-1);
    }
}
```

#### Big O Cheat Sheet

##### Common Big O Cases

- O(1) Constant: No loops, direct access.
- O(log N) Logarithmic: Typically for sorted data, like Binary Search.
- O(n) Linear: Iterating through collections with a single loop.
- O(n log(n)) Log Linear: Often seen in efficient sorting algorithms.
- O(n^2) Quadratic: Nested loops, comparisons between all elements.
- O(2^n) Exponential: Recursive algorithms that often solve problems by dividing them into smaller sizes, like the recursive calculation of the Fibonacci sequence.
- O(n!) Factorial: Highly inefficient, adding a loop for every element.

### Arrays

Arrays are a fundamental data structure that allows you to store elements of the same type. They are particularly efficient for direct access to individual elements. However, there are two primary types of arrays to consider: Fixed-size arrays and Dynamic arrays.

#### Fixed-Size Arrays

Fixed-size arrays are arrays that have a predetermined length that can't be changed once they're initialized. This type of array is common in languages like C#.

**Characteristics**:

- They cannot be resized after initialization.
- Inserting or deleting elements only means changing the value at a specific index. No shifts occur, and no space is freed up or added.
- Direct access to any element using its index.

**Examples**:

_Note: Fixed-size arrays aren't commonly used in Python, but we can use a tuple as a close representation. However, remember that it's not strictly a fixed-size array._

C#:

```csharp
int[] fixedArray = new int[5];
fixedArray[0] = 1;
fixedArray[1] = 2;
```

#### Dynamic Arrays

Dynamic arrays (often just called "arrays" in some languages) can grow or shrink in size. They automatically handle resizing when elements are added or removed. Examples include Python's list or JavaScript's array.

**Characteristics**:

- They can be resized dynamically as elements are added or removed.
- Inserting or deleting elements might involve shifting of subsequent elements.
- Directly inserting or deleting in the middle involves shifting other elements, making such operations less efficient.

C#:

```csharp
List<int> dynamicArray = new List<int>();
dynamicArray.Add(1);
dynamicArray.Add(2);
dynamicArray.Remove(1);
```

### Big O of Dynamic Array Methods

| Operation | Big O | Notes                                                  |
| --------- | ----- | ------------------------------------------------------ |
| Access    | O(1)  |                                                        |
| Search    | O(n)  | Because you have to go through all the elements        |
| Insertion | O(n)  | Due to potential dynamic resizing and element shifting |
| Deletion  | O(n)  | Due to potential dynamic resizing and element shifting |

### Big O of Fixed-Size Array Methods

| Operation | Big O | Notes                                                                |
| --------- | ----- | -------------------------------------------------------------------- |
| Access    | O(1)  |                                                                      |
| Search    | O(n)  | Because you have to go through all the elements                      |
| Insertion | O(1)  | Since you're simply changing the value at the specific index         |
| Deletion  | O(1)  | As it involves setting the value to a default or a 'null' equivalent |

### Big O of Algorithms

For algorithms, understanding their Big O complexity is crucial. It allows you to predict how they will perform as the input grows. This knowledge can guide you in choosing the right algorithm for your problem and optimizing your code's efficiency.

## Search

### Linear Search

#### Description

Linear search is a simple search algorithm that iterates over a list and checks if the current element is equal to the target element. If the equality condition is met, the algorithm returns the current element's index. If the target element is not found, the algorithm returns -1.

#### Use Cases

1. **Small Datasets:** For very small datasets, where the overhead of sorting or using more complex search algorithms (like binary search) would be more than the time saved, linear search can be a reasonable choice. The simplicity of linear search makes it practical for such cases.

2. **Unsorted Data:** When data is not sorted, or the order of elements doesn't matter, linear search is a straightforward approach to find a specific element in the list. Sorting the data before applying binary search can be an unnecessary overhead in such cases.

3. **Finding First Occurrence:** If you need to find the first occurrence of an element in a list, linear search is sufficient and may even be faster than binary search. Once the element is found, there's no need to continue searching.

4. **Partial Matches:** In scenarios where you're looking for partial matches or patterns within a dataset (e.g., searching for a substring within strings), linear search can be used to find all occurrences of the pattern.

#### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Search    | O(n)       |

#### Implementation

C#:

```csharp
public static int LinearSearch(int[] list, int item)
{
    // Iterate over each element in the list
    for (int i = 0; i < list.Length; i++)
    {
        // Check if the current element is equal to the target item
        if (list[i] == item)
        {
            // Return the index of the element if found
            return i;
        }
    }

    // Return -1 if the item is not found in the list
    return -1;
}
```

### Binary Search

#### Description

Binary search is a much faster form of search. Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time. Binary search only works on sorted arrays since it assumes that the middle item is the median, if the list isn't sorted, this assumption doesn't hold true, and the search might overlook the target item.

#### Use Cases

1. **Dictionary Lookup:** In a dictionary or phone book, where the entries are sorted by name, binary search can be used to quickly locate a specific entry by its name. This is much faster than sequentially flipping through the pages.

2. **Library Catalogs:** In library catalogs or online databases, books are often categorized and sorted by various attributes such as title, author, or ISBN. Binary search can be applied to find books based on these attributes.

3. **Finding a Word in a Sorted Text:** In sorted documents or lists, such as an index in a book or a sorted list of terms, binary search can help locate a specific term or word efficiently.

4. **Searching in Computer Science Algorithms:** Binary search is used in a wide range of computer science algorithms, such as in binary search trees (BSTs) for efficient data storage and retrieval, and in certain algorithms for finding the median or dividing data efficiently.

5. **Time Complexity Analysis in Algorithms:** When analyzing the time complexity of an algorithm, binary search is often used in theoretical discussions as an example of an algorithm with logarithmic time complexity. It's a good example for teaching the concept of divide and conquer strategies.

#### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Search    | O(log n)   |

#### Implementation

C#:

```csharp
public static int BinarySearch(int[] list, int item)
{
    var low = 0; // Initialize the lower bound of the search range
    var high = list.Length - 1; // Initialize the upper bound of the search range

    while (low <= high) // Continue the loop until the search range is valid
    {
        var mid = (low + high) / 2; // Calculate the middle index of the search range
        var guess = list[mid]; // Get the value at the middle index

        if (guess == item) // Check if the middle value is equal to the target item
        {
            return mid; // Return the index of the target item
        }

        if (guess > item) // Check if the middle value is greater than the target item
        {
            high = mid - 1; // Update the upper bound to search the lower half of the range
        }
        else
        {
            low = mid + 1; // Update the lower bound to search the upper half of the range
        }
    }

    return -1; // Return -1 to indicate that the target item was not found
}
```

#### The Two Crystal Balls Problem

Imagine you have two crystal balls, and your goal is to find the exact floor in a 100-story building from which you can drop a ball without it breaking. The challenge is to minimize the number of drops needed to determine this floor. How can binary search and the square root of "N" approach help you efficiently solve this puzzle?

There is a code example in the [two-crystal-balls-problem.ts](./code-samples/two-crystal-balls-problem.ts) file, execute that using `npx ts-node code-samples/two-crystal-balls-problem.ts`. Explanation of the solution is below.

##### Binary Search Solution

In the binary search solution, you start by dropping the first ball from the midpoint, which is the 50th floor. If it breaks, you know the target floor is somewhere between the 1st and 49th floors. If it doesn't break, the floor is between the 51st and 100th floors. Now, for the next drop, you would select the midpoint of your new range. For example, if the ball didn't break, your new range is 51st to 100th floors, and the midpoint would be the 75th floor. This process continues, halving the remaining search space each time, until you find the precise floor.

This approach provides an efficient solution with a time complexity of O(log n), where n is the total number of floors. The space complexity remains constant (O(1)). The logarithmic time complexity arises because with each drop, the search space is reduced by half.

##### Square Root of N Approach

The square root of N approach involves a systematic reduction in the number of possible floors by using the square root of N as the interval size. Start by dropping the first ball from the square root of the total number of floors. For a 100-floor building, this would be the 10th floor. If it breaks, explore floors 1 through 9 with the second ball. If it doesn't break, move up another 10 floors and repeat the process. This ensures that the complexity remains O(sqrt(n)), where n represents the total number of floors.

This method offers a time complexity of O(sqrt(n)) because you're reducing the number of potential drops by the square root of the total floors with each interval. The space complexity remains constant (O(1)), as in the binary search solution.

## Sort

### Bubble Sort

#### Description

Bubble sort is a sorting algorithm that works by repeatedly swapping the adjacent elements if they're in the wrong order. This process is repeated until no swaps are required, indicating that the list is sorted. For example, let's say we have the following list of numbers: [5, 3, 8]. The first iteration of the algorithm would compare the first two elements (5 and 3) and swap them since 5 is greater than 3. The list would then become [3, 5, 8]. The next iteration would compare the second and third elements (5 and 8) and leave them as is since they're already in the correct order. The list would then become [3, 5, 8]. Since no swaps are required, the algorithm would stop, and the list would be sorted.

#### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Sort      | O(n^2)     |

#### Implementation

C#:

```csharp
public static int[] BubbleSort(int[] items)
{
    var sorted = false;

    while (!sorted) // Loop until the array is sorted
    {
        sorted = true; // Assume the array is sorted initially

        for (int i = 0; i < items.Length - 1; i++) // Iterate through the array
        {
            if (items[i] > items[i + 1]) // Check if adjacent elements are in the wrong order
            {
                sorted = false; // If a swap is made, the array is not sorted yet
                var temp = items[i]; // Swap the elements
                items[i] = items[i + 1];
                items[i + 1] = temp;
            }
        }
    }

    return items; // Return the sorted array
}
```

### Quick Sort

#### Description

Quick sort is a sorting algorithm that uses the divide and conquer strategy to recursively divide the input array into two subarrays. A pivot element is chosen from the array. The elements smaller than the pivot are moved to the left of the pivot, and the elements greater than the pivot are moved to the right of the pivot. The pivot element is then placed between the two subarrays. This process continues until the array is sorted.

#### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Sort      | O(n log n) |

#### Implementation

C#:

```csharp
public static int[] QuickSort(int[] items)
{
    // Base case: if the array has 1 or fewer elements, it is already sorted
    if (items.Length <= 1)
    {
        return items;
    }

    // Choose the first element as the pivot
    var pivot = items[0];

    // Create two lists to store elements smaller than the pivot (left) and larger than the pivot (right)
    var left = new List<int>();
    var right = new List<int>();

    // Iterate through the array starting from the second element
    for (int i = 1; i < items.Length; i++)
    {
        // If the current element is smaller than the pivot, add it to the left list
        if (items[i] < pivot)
        {
            left.Add(items[i]);
        }
        // Otherwise, add it to the right list
        else
        {
            right.Add(items[i]);
        }
    }

    // Create a new list to store the sorted result
    var result = new List<int>();

    // Recursively sort the left list and add the sorted elements to the result list
    result.AddRange(QuickSort(left.ToArray()));

    // Add the pivot to the result list
    result.Add(pivot);

    // Recursively sort the right list and add the sorted elements to the result list
    result.AddRange(QuickSort(right.ToArray()));

    // Convert the result list to an array and return it
    return result.ToArray();
}
```

### Merge Sort

#### Description

Merge sort is a sorting algorithm that uses the divide and conquer strategy to recursively divide the input array into two subarrays. The two subarrays are then sorted and merged to produce the final sorted array. This process continues until the array is sorted.

#### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Sort      | O(n log n) |

#### Implementation

C#:

```csharp
public static int[] MergeSort(int[] items)
{
    if (items.Length <= 1)
    {
        return items;
    }

    var mid = items.Length / 2;
    var left = items.Take(mid).ToArray(); // Divide the array into left subarray
    var right = items.Skip(mid).ToArray(); // Divide the array into right subarray

    return Merge(MergeSort(left), MergeSort(right)); // Recursively merge and sort the subarrays
}

public static int[] Merge(int[] left, int[] right)
{
    var result = new List<int>(); // Create a new list to store the merged result
    var i = 0; // Initialize a pointer for the left subarray
    var j = 0; // Initialize a pointer for the right subarray

    while (i < left.Length && j < right.Length)
    {
        if (left[i] < right[j]) // Compare the elements at the current positions
        {
            result.Add(left[i]); // Add the smaller element to the result list
            i++; // Move the pointer in the left subarray
        }
        else
        {
            result.Add(right[j]); // Add the smaller element to the result list
            j++; // Move the pointer in the right subarray
        }
    }

    while (i < left.Length)
    {
        result.Add(left[i]); // Add the remaining elements from the left subarray
        i++;
    }

    while (j < right.Length)
    {
        result.Add(right[j]); // Add the remaining elements from the right subarray
        j++;
    }

    return result.ToArray(); // Convert the list to an array and return
}
```

## Data Structures

### Linked Lists

#### Description

Linked lists are a fundamental data structure that allows you to store a collection of elements. Each element in a linked list is called a node. Each node contains two items: the data and a reference to the next node. The last node has a reference to null. The entry point into a linked list is called the head of the list. It should be noted that some languages, such as Python, use the term "nodes" instead of "links" when referring to linked lists.

#### Characteristics

- They are linear data structures, meaning that there is a sequence and an order to how they are constructed and traversed.
- They are dynamic data structures, meaning that they can shrink and grow in memory size.
- They can be singly linked or doubly linked.
- They can be sorted or unsorted.
- They can be circular or non-circular.
- They can be immutable or mutable.
- They can be used to implement other data structures, such as stacks, queues, and graphs.

#### Real-World Examples

- **Music Playlist:** A music playlist can be implemented using a linked list. Each song would be a node in the list, and each node would contain a reference to the next song in the playlist.
- **Browser History:** A browser history can be implemented using a doubly linked list. Each page would be a node in the list, and each node would contain a reference to the previous and next pages.

#### Interface

- **InsertFirst:** Inserts an item at the beginning of the list.
- **InsertLast:** Inserts an item at the end of the list.
- **InsertAt:** Inserts an item at a specific position in the list.
- **RemoveFirst:** Removes the item at the beginning of the list.
- **RemoveLast:** Removes the item at the end of the list.
- **Remove:** Removes the first occurrence of a specific item from the list.
- **RemoveAt:** Removes the item at a specific position in the list.
- **Reverse:** Reverses the order of the items in the list.
- **Print:** Prints the items in the list.
- **Count:** Returns the number of items in the list.

#### Complexity

| Operation   | Complexity |
| ----------- | ---------- |
| InsertFirst | O(1)       |
| InsertLast  | O(1)       |
| InsertAt    | O(n)       |
| RemoveFirst | O(1)       |
| RemoveLast  | O(n)       |
| Remove      | O(n)       |
| RemoveAt    | O(n)       |
| Reverse     | O(n)       |
| Print       | O(n)       |
| Count       | O(n)       |

#### Implementation

C#:

```csharp
public class Node<T>
{
    public T Data { get; set; }  // Represents the data stored in the node
    public Node<T> Next { get; set; }  // Represents the reference to the next node in the linked list

    public Node(T data)  // Constructor to initialize the node with data
    {
        Data = data;
    }
}

public class LinkedList<T>
{
    public Node<T> Head { get; set; }  // Represents the first node in the linked list
    public Node<T> Tail { get; set; }  // Represents the last node in the linked list

    public int Count  // Property to get the number of nodes in the linked list
    {
        get
        {
            var current = Head;  // Start from the head node
            var count = 0;  // Initialize the count to 0

            while (current != null)  // Traverse the linked list until the end
            {
                count++;  // Increment the count
                current = current.Next;  // Move to the next node
            }

            return count;  // Return the count
        }
    }

    public void InsertFirst(T data)  // Inserts a new node with the given data at the beginning of the linked list
    {
        var node = new Node<T>(data);  // Create a new node with the given data

        if (Head == null)  // If the linked list is empty
        {
            Head = node;  // Set the head and tail to the new node
            Tail = node;
        }
        else  // If the linked list is not empty
        {
            node.Next = Head;  // Set the next reference of the new node to the current head
            Head = node;  // Update the head to the new node
        }
    }

    public void InsertLast(T data)  // Inserts a new node with the given data at the end of the linked list
    {
        var node = new Node<T>(data);  // Create a new node with the given data

        if (Head == null)  // If the linked list is empty
        {
            Head = node;  // Set the head and tail to the new node
            Tail = node;
        }
        else  // If the linked list is not empty
        {
            Tail.Next = node;  // Set the next reference of the current tail to the new node
            Tail = node;  // Update the tail to the new node
        }
    }

    public void InsertAt(T data, int index)  // Inserts a new node with the given data at the specified index in the linked list
    {
        if (index == 0)  // If the index is 0, insert at the beginning
        {
            InsertFirst(data);
        }
        else  // If the index is not 0
        {
            var current = Head;  // Start from the head node

            for (int i = 0; i < index - 1; i++)  // Traverse to the node before the specified index
            {
                if (current.Next == null)  // If the end of the linked list is reached before the specified index
                {
                    throw new InvalidOperationException();  // Throw an exception
                }

                current = current.Next;  // Move to the next node
            }

            var node = new Node<T>(data);  // Create a new node with the given data
            node.Next = current.Next;  // Set the next reference of the new node to the next node of the current node
            current.Next = node;  // Set the next reference of the current node to the new node
        }
    }

    public void RemoveFirst()  // Removes the first node from the linked list
    {
        if (Head == null)  // If the linked list is empty
        {
            throw new InvalidOperationException();  // Throw an exception
        }

        if (Head == Tail)  // If there is only one node in the linked list
        {
            Head = null;  // Set the head and tail to null
            Tail = null;
        }
        else  // If there are more than one nodes in the linked list
        {
            Head = Head.Next;  // Update the head to the next node
        }
    }

    public void RemoveLast()  // Removes the last node from the linked list
    {
        if (Head == null)  // If the linked list is empty
        {
            throw new InvalidOperationException();  // Throw an exception
        }

        if (Head == Tail)  // If there is only one node in the linked list
        {
            Head = null;  // Set the head and tail to null
            Tail = null;
        }
        else  // If there are more than one nodes in the linked list
        {
            var current = Head;  // Start from the head node

            while (current.Next != Tail)  // Traverse to the node before the tail
            {
                current = current.Next;  // Move to the next node
            }

            current.Next = null;  // Set the next reference of the current node to null
            Tail = current;  // Update the tail to the current node
        }
    }

    public void Remove(T data)  // Removes the first occurrence of the node with the given data from the linked list
    {
        if (Head == null)  // If the linked list is empty
        {
            throw new InvalidOperationException();  // Throw an exception
        }

        if (Head == Tail && Head.Data.Equals(data))  // If there is only one node in the linked list and it contains the given data
        {
            Head = null;  // Set the head and tail to null
            Tail = null;
        }
        else if (Head.Data.Equals(data))  // If the head node contains the given data
        {
            Head = Head.Next;  // Update the head to the next node
        }
        else  // If the node with the given data is not the head node
        {
            var current = Head;  // Start from the head node

            while (current.Next != null && !current.Next.Data.Equals(data))  // Traverse until the end or the node with the given data is found
            {
                current = current.Next;  // Move to the next node
            }

            if (current.Next != null)  // If the node with the given data is found
            {
                current.Next = current.Next.Next;  // Remove the node by updating the next reference of the current node
            }
        }
    }

    public void RemoveAt(int index)  // Removes the node at the specified index from the linked list
    {
        if (Head == null)  // If the linked list is empty
        {
            throw new InvalidOperationException();  // Throw an exception
        }

        if (index == 0)  // If the index is 0, remove the first node
        {
            Head = Head.Next;  // Update the head to the next node
        }
        else  // If the index is not 0
        {
            var current = Head;  // Start from the head node
            var previous = Head;  // Initialize the previous node as the head node

            for (int i = 0; i < index; i++)  // Traverse to the node at the specified index
            {
                if (current.Next == null)  // If the end of the linked list is reached before the specified index
                {
                    throw new InvalidOperationException();  // Throw an exception
                }

                previous = current;  // Update the previous node to the current node
                current = current.Next;  // Move to the next node
            }

            previous.Next = current.Next;  // Remove the node by updating the next reference of the previous node
        }
    }

    public void Reverse()  // Reverses the order of the nodes in the linked list
    {
        if (Head == null)  // If the linked list is empty
        {
            throw new InvalidOperationException();  // Throw an exception
        }

        if (Head == Tail)  // If there is only one node in the linked list
        {
            return;  // No need to reverse
        }

        var current = Head;  // Start from the head node
        Tail = Head;  // Update the tail to the head node
        Node<T> previous = null;  // Initialize the previous node as null

        while (current != null)  // Traverse the linked list
        {
            var next = current.Next;  // Store the next node
            current.Next = previous;  // Reverse the next reference of the current node to the previous node
            previous = current;  // Update the previous node to the current node
            current = next;  // Move to the next node
        }

        Head = previous;  // Update the head to the last node (previous node)
    }

    public void Print()  // Prints the data of all nodes in the linked list
    {
        var current = Head;  // Start from the head node

        while (current != null)  // Traverse the linked list
        {
            Console.WriteLine(current.Data);  // Print the data of the current node
            current = current.Next;  // Move to the next node
        }
    }
}
```

### Doubly Linked Lists

#### Description

Doubly linked lists are basically the same as singly linked lists, except that each node has a reference to the previous node as well as the next node. This allows you to traverse the list in both directions. However, this comes at the cost of additional memory, as each node now has to store a reference to the previous node.

#### Interface

- **InsertFirst:** Inserts an item at the beginning of the list.
- **InsertLast:** Inserts an item at the end of the list.
- **InsertAt:** Inserts an item at a specific position in the list.
- **RemoveFirst:** Removes the item at the beginning of the list.
- **RemoveLast:** Removes the item at the end of the list.
- **Remove:** Removes the first occurrence of a specific item from the list.
- **RemoveAt:** Removes the item at a specific position in the list.
- **Reverse:** Reverses the order of the items in the list.
- **Print:** Prints the items in the list.
- **Count:** Returns the number of items in the list.

#### Complexity

| Operation   | Complexity |
| ----------- | ---------- |
| InsertFirst | O(1)       |
| InsertLast  | O(1)       |
| InsertAt    | O(n)       |
| RemoveFirst | O(1)       |
| RemoveLast  | O(1)       |
| Remove      | O(n)       |
| RemoveAt    | O(n)       |
| Reverse     | O(n)       |
| Print       | O(n)       |
| Count       | O(n)       |

#### Implementation

C#:

```csharp
public class Node<T>
{
    public T Data { get; set; } // Represents the data stored in the node
    public Node<T> Next { get; set; } // Represents the reference to the next node
    public Node<T> Previous { get; set; } // Represents the reference to the previous node

    public Node(T data)
    {
        Data = data; // Initializes the node with the provided data
    }
}

public class DoublyLinkedList<T>
{
    public Node<T> Head { get; set; } // Represents the first node in the doubly linked list
    public Node<T> Tail { get; set; } // Represents the last node in the doubly linked list

    public int Count
    {
        get
        {
            var current = Head; // Starts from the first node
            var count = 0; // Initializes the count to 0

            while (current != null) // Loops until the end of the list
            {
                count++; // Increments the count
                current = current.Next; // Moves to the next node
            }

            return count; // Returns the count of nodes in the list
        }
    }

    public void InsertFirst(T data)
    {
        var node = new Node<T>(data); // Creates a new node with the provided data

        if (Head == null) // If the list is empty
        {
            Head = node; // Sets the new node as the head
            Tail = node; // Sets the new node as the tail
        }
        else
        {
            node.Next = Head; // Sets the next reference of the new node to the current head
            Head.Previous = node; // Sets the previous reference of the current head to the new node
            Head = node; // Sets the new node as the new head
        }
    }

    public void InsertLast(T data)
    {
        var node = new Node<T>(data); // Creates a new node with the provided data

        if (Head == null) // If the list is empty
        {
            Head = node; // Sets the new node as the head
            Tail = node; // Sets the new node as the tail
        }
        else
        {
            Tail.Next = node; // Sets the next reference of the current tail to the new node
            node.Previous = Tail; // Sets the previous reference of the new node to the current tail
            Tail = node; // Sets the new node as the new tail
        }
    }

    public void InsertAt(T data, int index)
    {
        if (index == 0) // If the index is 0, insert at the beginning
        {
            InsertFirst(data);
        }
        else
        {
            var current = Head; // Starts from the head

            for (int i = 0; i < index - 1; i++) // Loops until the node before the desired index
            {
                if (current.Next == null) // If the end of the list is reached before the desired index
                {
                    throw new InvalidOperationException(); // Throws an exception
                }

                current = current.Next; // Moves to the next node
            }

            var node = new Node<T>(data); // Creates a new node with the provided data
            node.Next = current.Next; // Sets the next reference of the new node to the next node of the current node
            node.Previous = current; // Sets the previous reference of the new node to the current node
            current.Next = node; // Sets the next reference of the current node to the new node
        }
    }

    public void RemoveFirst()
    {
        if (Head == null) // If the list is empty
        {
            throw new InvalidOperationException(); // Throws an exception
        }

        if (Head == Tail) // If there is only one node in the list
        {
            Head = null; // Sets the head to null
            Tail = null; // Sets the tail to null
        }
        else
        {
            Head = Head.Next; // Sets the head to the next node
            Head.Previous = null; // Sets the previous reference of the new head to null
        }
    }

    public void RemoveLast()
    {
        if (Head == null) // If the list is empty
        {
            throw new InvalidOperationException(); // Throws an exception
        }

        if (Head == Tail) // If there is only one node in the list
        {
            Head = null; // Sets the head to null
            Tail = null; // Sets the tail to null
        }
        else
        {
            Tail = Tail.Previous; // Sets the tail to the previous node
            Tail.Next = null; // Sets the next reference of the new tail to null
        }
    }

    public void Remove(T data)
    {
        if (Head == null) // If the list is empty
        {
            throw new InvalidOperationException(); // Throws an exception
        }

        if (Head == Tail && Head.Data.Equals(data)) // If there is only one node in the list and it contains the desired data
        {
            Head = null; // Sets the head to null
            Tail = null; // Sets the tail to null
        }
        else if (Head.Data.Equals(data)) // If the head contains the desired data
        {
            Head = Head.Next; // Sets the head to the next node
            Head.Previous = null; // Sets the previous reference of the new head to null
        }
        else
        {
            var current = Head; // Starts from the head

            while (current.Next != null && !current.Next.Data.Equals(data)) // Loops until the end of the list or the desired data is found
            {
                current = current.Next; // Moves to the next node
            }

            if (current.Next != null) // If the desired data is found
            {
                current.Next = current.Next.Next; // Sets the next reference of the current node to the next node of the next node
                current.Next.Previous = current; // Sets the previous reference of the next node of the current node to the current node
            }
        }
    }

    public void RemoveAt(int index)
    {
        if (Head == null) // If the list is empty
        {
            throw new InvalidOperationException(); // Throws an exception
        }

        if (index == 0) // If the index is 0, remove the first node
        {
            Head = Head.Next; // Sets the head to the next node
            Head.Previous = null; // Sets the previous reference of the new head to null
        }
        else
        {
            var current = Head; // Starts from the head
            var previous = Head; // Keeps track of the previous node

            for (int i = 0; i < index; i++) // Loops until the desired index
            {
                if (current.Next == null) // If the end of the list is reached before the desired index
                {
                    throw new InvalidOperationException(); // Throws an exception
                }

                previous = current; // Updates the previous node
                current = current.Next; // Moves to the next node
            }

            previous.Next = current.Next; // Sets the next reference of the previous node to the next node of the current node

            if (current.Next != null) // If the current node is not the last node
            {
                current.Next.Previous = previous; // Sets the previous reference of the next node of the current node to the previous node
            }
        }
    }

    public void Reverse()
    {
        if (Head == null) // If the list is empty
        {
            throw new InvalidOperationException(); // Throws an exception
        }

        if (Head == Tail) // If there is only one node in the list
        {
            return; // Returns without reversing
        }

        var current = Head; // Starts from the head
        Tail = Head; // Sets the tail to the head

        while (current != null) // Loops until the end of the list
        {
            var next = current.Next; // Stores the next node
            current.Next = current.Previous; // Reverses the next reference of the current node
            current.Previous = next; // Reverses the previous reference of the current node
            current = next; // Moves to the next node
        }

        Head = Tail; // Sets the head to the tail
        Tail = current; // Sets the tail to the current node
    }

    public void Print()
    {
        var current = Head; // Starts from the head

        while (current != null) // Loops until the end of the list
        {
            Console.WriteLine(current.Data); // Prints the data of the current node
            current = current.Next; // Moves to the next node
        }
    }
}
```

### Queues

#### Description

Queues are a fundamental data structure that allows you to store a collection of elements. Each element in a queue is called an item. The entry point into a queue is called the front of the queue, and the exit point is called the rear of the queue. Queues follow the First In First Out (FIFO) principle, meaning that the first item to be added to the queue is the first to be removed.

#### Real-World Examples

- **Waiting in Line:** Queues are often used to manage resources shared by multiple consumers. For example, a printer queue manages multiple print jobs submitted by various users. The first job to enter the queue is the first to be printed.
- **Breadth-First Search:** Queues are used in breadth-first search (BFS) algorithms for traversing a tree or graph. The nodes are visited in the order of their distance from the root, following the FIFO principle.
- **Buffer:** Queues are used to implement buffers in certain computer architectures. Buffers are temporary storage areas that are used to compensate for a difference in speed between two processes. For example, a queue can be used to hold data that is being transferred from one process to another.
- **Asynchronous Data Transfer:** Queues are used to implement asynchronous data transfer between two processes. The queue temporarily holds the data before it is received by the other process. This is often used in computer networks.

#### Interface

- **Enqueue:** Adds an item to the rear of the queue.
- **Dequeue:** Removes the item at the front of the queue.
- **Peek:** Returns the item at the front of the queue without deleting it.
- **Clear:** Removes all items from the queue.
- **Count:** Returns the number of items in the queue.

#### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Enqueue   | O(1)       |
| Dequeue   | O(1)       |
| Peek      | O(1)       |
| Clear     | O(1)       |
| Count     | O(1)       |

#### Implementation

C#:

```csharp
public class Node<T>
{
    public T Data { get; set; }  // Represents the data stored in the node.
    public Node<T> Next { get; set; }  // Represents the reference to the next node in the queue.

    public Node(T data)
    {
        Data = data;  // Initializes the data of the node with the provided value.
    }
}

public class Queue<T>
{
    private Node<T> _head;  // Represents the first node in the queue.
    private Node<T> _tail;  // Represents the last node in the queue.

    public int Count { get; private set; }  // Represents the number of items in the queue.

    public void Enqueue(T data)
    {
        var node = new Node<T>(data);  // Creates a new node with the provided data.

        if (_head == null)
        {
            _head = node;  // If the queue is empty, sets the new node as both the head and tail.
            _tail = node;
        }
        else
        {
            _tail.Next = node;  // If the queue is not empty, sets the new node as the next node of the tail.
            _tail = node;  // Updates the tail to be the new node.
        }

        Count++;  // Increases the count of items in the queue.
    }

    public T Dequeue()
    {
        if (_head == null)
        {
            throw new InvalidOperationException();  // Throws an exception if the queue is empty.
        }

        var data = _head.Data;  // Retrieves the data from the head node.
        _head = _head.Next;  // Updates the head to be the next node.
        Count--;  // Decreases the count of items in the queue.
        return data;  // Returns the retrieved data.
    }

    public T Peek()
    {
        if (_head == null)
        {
            throw new InvalidOperationException();  // Throws an exception if the queue is empty.
        }

        return _head.Data;  // Returns the data from the head node without removing it.
    }

    public void Clear()
    {
        _head = null;  // Clears the queue by setting both head and tail to null.
        _tail = null;
        Count = 0;  // Resets the count of items in the queue to zero.
    }
}
```

### Stacks

#### Description

Stacks are a fundamental data structure that allows you to store a collection of elements. Each element in a stack is called an item. The entry point into a stack is called the top of the stack, and the exit point is called the base of the stack. Stacks follow the Last In First Out (LIFO) principle, meaning that the last item to be added to the stack is the first to be removed.

#### Real-World Examples

- **Undo Functionality:** Stacks are used to implement undo functionality in text editors and other software. Each item added to the stack represents an edit operation. When the undo operation is performed, the most recent edit is reversed by removing the most recent item from the stack.
- **Call Stack:** Stacks are used to manage function invocations and variables in memory when a function is called. The function call stack stores the memory address of the current function, its parameters, and local variables. When a function returns, the stack removes the topmost function, and the program resumes execution at the function stored below.
- **Expression Evaluation:** Stacks are used to evaluate expressions in programming languages. For example, when evaluating the expression 2 + 3 \* 5, the numbers 2 and 3 would be pushed to the stack. When the multiplication operator is reached, the numbers 2 and 3 would be popped from the stack, multiplied, and the result, 6, would be pushed back to the stack. The addition operator would then be evaluated, and the final result, 11, would be returned.
- **Backtracking:** Stacks are used to implement backtracking algorithms, such as depth-first search (DFS). In DFS, nodes are visited in the order of their depth, following the LIFO principle. This is often used in tree traversal algorithms.

#### Interface

- **Push:** Adds an item to the top of the stack.
- **Pop:** Removes the top item from the stack.
- **Peek:** Returns the top item from the stack without deleting it.
- **Clear:** Removes all items from the stack.
- **Count:** Returns the number of items in the stack.

#### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Push      | O(1)       |
| Pop       | O(1)       |
| Peek      | O(1)       |
| Clear     | O(1)       |
| Count     | O(1)       |

#### Implementation

C#:

```csharp
public class Node<T>
{
    public T Data { get; set; }  // Represents the data stored in the node.
    public Node<T> Next { get; set; }  // Represents the reference to the next node in the linked list.

    public Node(T data)
    {
        Data = data;  // Initializes the data of the node with the provided value.
    }
}

public class Stack<T>
{
    private Node<T> _top;  // Represents the top node of the stack.

    public int Count { get; private set; }  // Represents the number of elements in the stack.

    public void Push(T data)
    {
        var node = new Node<T>(data);  // Creates a new node with the provided data.

        if (_top == null)
        {
            _top = node;  // If the stack is empty, the new node becomes the top node.
        }
        else
        {
            node.Next = _top;  // Sets the next reference of the new node to the current top node.
            _top = node;  // Updates the top node to be the new node.
        }

        Count++;  // Increments the count of elements in the stack.
    }

    public T Pop()
    {
        if (_top == null)
        {
            throw new InvalidOperationException();  // Throws an exception if the stack is empty.
        }

        var data = _top.Data;  // Retrieves the data of the top node.
        _top = _top.Next;  // Updates the top node to be the next node in the stack.
        Count--;  // Decrements the count of elements in the stack.
        return data;  // Returns the data of the popped node.
    }

    public T Peek()
    {
        if (_top == null)
        {
            throw new InvalidOperationException();  // Throws an exception if the stack is empty.
        }

        return _top.Data;  // Returns the data of the top node without removing it.
    }

    public void Clear()
    {
        _top = null;  // Sets the top node to null, effectively clearing the stack.
        Count = 0;  // Resets the count of elements in the stack to zero.
    }
}
```

### Arrays vs. Linked Lists

- **Access:** Arrays allow for constant time access to any element in the array. Linked lists, on the other hand, require O(n) time to access an element in the list. This is because you have to traverse the list from the beginning to find the element.
- **Search:** Both arrays and linked lists require O(n) time to search for an element. This is because you have to traverse the list from the beginning to find the element.
- **Insertion:** Inserting an element into an array requires O(n) time since you have to shift all the elements after the inserted element to the right by one. Inserting an element into a linked list, however, only requires O(1) time since you only have to update the references of the adjacent nodes.
- **Deletion:** Deleting an element from an array requires O(n) time since you have to shift all the elements after the deleted element to the left by one. Deleting an element from a linked list, however, only requires O(1) time since you only have to update the references of the adjacent nodes.
- **Memory:** Arrays are stored in contiguous memory locations, meaning that all the elements are stored next to each other in memory. Linked lists, on the other hand, are stored in non-contiguous memory locations, meaning that the elements are stored at arbitrary memory locations. This means that accessing an element in an array is faster than accessing an element in a linked list since you can access any element in an array directly if you know its index. In a linked list, you have to traverse the list from the beginning to find the element.
- **Size:** Arrays are fixed in size, meaning that you have to specify the size of the array when you initialize it. Linked lists, on the other hand, are dynamic in size, meaning that they can grow and shrink in size as needed.
- **Sorting:** Arrays are easier to sort than linked lists since you can directly access any element in an array if you know its index. In a linked list, you have to traverse the list from the beginning to find the element. This means that sorting an array is faster than sorting a linked list.

### ArrayList

#### Description

An ArrayList is a dynamic array that can grow and shrink in size. It's similar to an array, but it doesn't require you to specify the size when you initialize it. Instead, it automatically allocates more memory when needed. They way it grows depends on the implementation. For example, it can double in size each time more memory is needed, or it can grow by a fixed percentage each time. It can also shrink in size if the number of elements decreases.

#### Characteristics

- It's a dynamic array that can grow and shrink in size.
- It's a linear data structure, meaning that there is a sequence and an order to how they are constructed and traversed.
- It's a random access data structure, meaning that you can directly access any element in the list if you know its index.
- It's mutable, meaning that you can modify the elements in the list.
- It can be sorted or unsorted.

#### Real-World Examples

- **Shopping List:** An ArrayList can be used to implement a shopping list. Each item would be an element in the list, and each element would be associated with a quantity.
- **To-Do List:** An ArrayList can be used to implement a to-do list. Each item would be an element in the list, and each element would be associated with a status (e.g., completed or not completed).
- **Library Catalog:** An ArrayList can be used to implement a library catalog. Each book would be an element in the list, and each element would be associated with a status (e.g., available or checked out).

#### Interface

- **Add:** Adds an element to the end of the list.
- **Insert:** Inserts an element at the specified index.
- **Remove:** Removes the first occurrence of the specified element.
- **RemoveAt:** Removes the element at the specified index.
- **IndexOf:** Returns the index of the first occurrence of the specified element.
- **Contains:** Returns true if the list contains the specified element.
- **Clear:** Removes all elements from the list.
- **Count:** Returns the number of elements in the list.

#### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Add       | O(1)       |
| Insert    | O(n)       |
| Remove    | O(n)       |
| RemoveAt  | O(n)       |
| IndexOf   | O(n)       |
| Contains  | O(n)       |
| Clear     | O(1)       |
| Count     | O(1)       |

#### Implementation

C#:

```csharp
public class ArrayList<T>
{
    private T[] _items;

    public int Count { get; private set; }

    public ArrayList()
    {
        _items = new T[0];
    }

    // Adds an item to the end of the list
    public void Add(T item)
    {
        // If the array is full, create a new array with double the capacity
        if (Count == _items.Length)
        {
            var newItems = new T[(Count == 0) ? 4 : Count * 2];
            _items.CopyTo(newItems, 0);
            _items = newItems;
        }

        // Add the item to the end of the array and increment the count
        _items[Count] = item;
        Count++;
    }

    // Inserts an item at the specified index
    public void Insert(T item, int index)
    {
        // Check if the index is out of range
        if (index < 0 || index > Count)
        {
            throw new IndexOutOfRangeException();
        }

        // If the array is full, create a new array with double the capacity
        if (Count == _items.Length)
        {
            var newItems = new T[(Count == 0) ? 4 : Count * 2];
            _items.CopyTo(newItems, 0);
            _items = newItems;
        }

        // Shift the elements after the index to the right
        for (int i = Count; i > index; i--)
        {
            _items[i] = _items[i - 1];
        }

        // Insert the item at the specified index and increment the count
        _items[index] = item;
        Count++;
    }

    // Removes the item at the specified index
    public void RemoveAt(int index)
    {
        // Check if the index is out of range
        if (index < 0 || index >= Count)
        {
            throw new IndexOutOfRangeException();
        }

        // Shift the elements after the index to the left
        for (int i = index; i < Count - 1; i++)
        {
            _items[i] = _items[i + 1];
        }

        // Decrement the count
        Count--;
    }

    // Removes the first occurrence of the specified item
    public void Remove(T item)
    {
        // Find the index of the item
        var index = IndexOf(item);

        // If the item is found, remove it
        if (index != -1)
        {
            RemoveAt(index);
        }
    }

    // Returns the index of the first occurrence of the specified item
    public int IndexOf(T item)
    {
        for (int i = 0; i < Count; i++)
        {
            if (_items[i].Equals(item))
            {
                return i;
            }
        }

        return -1;
    }

    // Returns true if the list contains the specified item
    public bool Contains(T item)
    {
        return IndexOf(item) != -1;
    }

    // Removes all items from the list
    public void Clear()
    {
        _items = new T[0];
        Count = 0;
    }

    // Indexer to access items by index
    public T this[int index]
    {
        get
        {
            // Check if the index is out of range
            if (index < 0 || index >= Count)
            {
                throw new IndexOutOfRangeException();
            }

            return _items[index];
        }
        set
        {
            // Check if the index is out of range
            if (index < 0 || index >= Count)
            {
                throw new IndexOutOfRangeException();
            }

            _items[index] = value;
        }
    }
}
```

### ArrayBuffers

#### Description

ArrayBuffers are fixed-size buffers that allow you to store a collection of elements. They are similar to arrays, but they don't allow you to add or remove elements. They are useful when you need to store a fixed number of elements and don't need to add or remove elements. They are also useful when you need to pass a large amount of data to a function.

#### Characteristics

- They are fixed-size buffers, meaning that you have to specify the size when you initialize them.
- They are a linear data structure, meaning that there is a sequence and an order to how they are constructed and traversed.
- They are a random access data structure, meaning that you can directly access any element in the buffer if you know its index.

#### Real-World Examples

- **Image Processing:** ArrayBuffers are used in image processing algorithms to store the pixel data of an image. Each pixel is represented by a single element in the buffer.
- **Audio Processing:** ArrayBuffers are used in audio processing algorithms to store the audio data of a sound. Each sample is represented by a single element in the buffer.
- **File Transfer:** ArrayBuffers are used in file transfer protocols to store the data of a file. Each byte is represented by a single element in the buffer.
- **Networking:** ArrayBuffers are used in networking protocols to store the data of a packet. Each byte is represented by a single element in the buffer.
- **Data Compression:** ArrayBuffers are used in data compression algorithms to store the compressed data. Each byte is represented by a single element in the buffer.

#### Interface

- **Get:** Returns the element at the specified index.
- **Set:** Sets the element at the specified index.
- **Slice:** Returns a new ArrayBuffer that contains a copy of the elements from the start index to the end index.
- **CopyTo:** Copies the elements from the start index to the end index to the specified ArrayBuffer.
- **Clear:** Sets all the elements in the buffer to zero.
- **Count:** Returns the number of elements in the buffer.
- **ByteLength:** Returns the size of the buffer in bytes.
- **ByteOffset:** Returns the offset of the buffer in bytes.

#### Complexity

| Operation  | Complexity |
| ---------- | ---------- |
| Get        | O(1)       |
| Set        | O(1)       |
| Slice      | O(n)       |
| CopyTo     | O(n)       |
| Clear      | O(n)       |
| Count      | O(1)       |
| ByteLength | O(1)       |
| ByteOffset | O(1)       |

#### Implementation

C#:

```csharp
public class ArrayBuffer
{
    private byte[] _items;

    // Constructor that initializes the ArrayBuffer with a specified size
    public ArrayBuffer(int size)
    {
        _items = new byte[size];
    }

    // Get method that returns the byte at the specified index
    public byte Get(int index)
    {
        if (index < 0 || index >= _items.Length)
        {
            throw new IndexOutOfRangeException();
        }

        return _items[index];
    }

    // Set method that sets the byte at the specified index to the given value
    public void Set(int index, byte item)
    {
        if (index < 0 || index >= _items.Length)
        {
            throw new IndexOutOfRangeException();
        }

        _items[index] = item;
    }

    // Slice method that returns a new ArrayBuffer containing a copy of the elements from the start index to the end index
    public ArrayBuffer Slice(int start, int end)
    {
        if (start < 0 || start >= _items.Length)
        {
            throw new IndexOutOfRangeException();
        }

        if (end < 0 || end >= _items.Length)
        {
            throw new IndexOutOfRangeException();
        }

        if (start > end)
        {
            throw new InvalidOperationException();
        }

        var length = end - start + 1;
        var buffer = new ArrayBuffer(length);

        for (int i = 0; i < length; i++)
        {
            buffer.Set(i, _items[start + i]);
        }

        return buffer;
    }

    // CopyTo method that copies the elements from the start index to the end index to the specified ArrayBuffer
    public void CopyTo(ArrayBuffer buffer, int start, int end)
    {
        if (start < 0 || start >= _items.Length)
        {
            throw new IndexOutOfRangeException();
        }

        if (end < 0 || end >= _items.Length)
        {
            throw new IndexOutOfRangeException();
        }

        if (start > end)
        {
            throw new InvalidOperationException();
        }

        var length = end - start + 1;

        if (length > buffer.ByteLength)
        {
            throw new InvalidOperationException();
        }

        for (int i = 0; i < length; i++)
        {
            buffer.Set(i, _items[start + i]);
        }
    }

    // Clear method that sets all the elements in the buffer to zero
    public void Clear()
    {
        for (int i = 0; i < _items.Length; i++)
        {
            _items[i] = 0;
        }
    }

    // Count method that returns the number of elements in the buffer
    public int Count()
    {
        return _items.Length;
    }

    // ByteLength method that returns the size of the buffer in bytes
    public int ByteLength()
    {
        return _items.Length;
    }

    // ByteOffset method that returns the offset of the buffer in bytes
    public int ByteOffset()
    {
        return 0;
    }
}
```

## Recursion

### Description

Recursion is a programming technique that allows you to solve a problem by breaking it down into smaller subproblems. It involves solving a problem by calling a function that calls itself until a base case is reached. A base case is a condition that stops the recursion. It's important to note that every recursive function must have a base case, otherwise it will run forever and cause a stack overflow.

### Simple Example

```csharp
public static int Factorial(int n)
{
    if (n == 0)
    {
        return 1;
    }

    return n * Factorial(n - 1);
}
```

### Maze Example

#### Description

In this example, we will use recursion to solve a maze. The maze is represented by a 2D array of cells. Each cell can be either a wall or a path. The goal is to find a path from the start cell to the end cell. The start cell is represented by the char S, and the end cell is represented by the char E. The path is represented by the char P. The walls are represented by the char #. The path can only contain cells that are adjacent to each other. The path can only contain cells that are not walls. The path can only contain cells that have not already been visited.

#### Base Cases

- If the current cell is outside the maze, return false.
- If the current cell is the end cell, return true.
- If the current cell is a wall, return false.
- If the current cell has already been visited, return false.

#### Implementation

C#:

```csharp
public static bool SolveMaze(char[,] maze, int row, int col)
{
    // Check if the current cell is outside the maze boundaries
    if (row < 0 || row >= maze.GetLength(0) || col < 0 || col >= maze.GetLength(1))
    {
        return false;
    }

    // Check if the current cell is the end cell
    if (maze[row, col] == 'E')
    {
        return true;
    }

    // Check if the current cell is a wall or already visited
    if (maze[row, col] == '#' || maze[row, col] == 'P')
    {
        return false;
    }

    // Mark the current cell as visited
    maze[row, col] = 'P';

    // Recursively solve the maze by exploring neighboring cells
    if (SolveMaze(maze, row - 1, col))
    {
        return true;
    }

    if (SolveMaze(maze, row + 1, col))
    {
        return true;
    }

    if (SolveMaze(maze, row, col - 1))
    {
        return true;
    }

    if (SolveMaze(maze, row, col + 1))
    {
        return true;
    }

    // If no path is found, backtrack and mark the current cell as empty
    maze[row, col] = ' ';
    return false;
}

// Test (5x7)

var maze = new char[,]
{
    { '#', '#', '#', '#', '#', '#', '#' },
    { '#', ' ', ' ', ' ', '#', ' ', '#' },
    { '#', ' ', '#', ' ', '#', ' ', '#' },
    { '#', ' ', '#', ' ', ' ', ' ', '#' },
    { '#', ' ', '#', '#', '#', ' ', '#' },
    { '#', ' ', ' ', ' ', '#', ' ', '#' },
    { '#', '#', '#', '#', '#', 'E', '#' }
};

// Solve the maze starting from the given coordinates
SolveMaze(maze, 1, 1);

// Print the solved maze
for (int i = 0; i < maze.GetLength(0); i++)
{
    for (int j = 0; j < maze.GetLength(1); j++)
    {
        Console.Write(maze[i, j]);
    }

    Console.WriteLine();
}
```

## Trees

### Description

Trees are a fundamental data structure that allow you to store a collection of elements. Each element in a tree is called a node. The topmost node in a tree is called the root node. Each node can have zero or more child nodes. Nodes with no child nodes are called leaf nodes. Trees are often used to represent hierarchical data, such as the folders and files on your computer.

### Characteristics

- They are a hierarchical data structure, meaning that each node has zero or more child nodes.
- They are a non-linear data structure, meaning that there is no sequential order to how they are constructed and traversed.
- They are a random access data structure, meaning that you can directly access any node in the tree if you know its path.
- They are mutable, meaning that you can modify the nodes in the tree.
- They can be sorted or unsorted.
- They can be balanced or unbalanced.
- They can be directed or undirected.
- They can be weighted or unweighted.
- They can be rooted or unrooted.
- They can be ordered or unordered.
- They can be binary or non-binary.

### Real-World Examples

- **File System:** Trees are used to represent the folders and files on your computer. Each folder is a node, and each file is a leaf node.
- **HTML DOM:** Trees are used to represent the HTML DOM. Each HTML element is a node, and each text node is a leaf node.
- **Family Tree:** Trees are used to represent family trees. Each person is a node, and each parent-child relationship is an edge.
- **Organization Chart:** Trees are used to represent organization charts. Each employee is a node, and each manager-employee relationship is an edge.
- **Decision Tree:** Trees are used to represent decision trees. Each decision is a node, and each possible outcome is an edge.
- **Abstract Syntax Tree:** Trees are used to represent abstract syntax trees. Each token is a node, and each rule is an edge.
- **Minimax Tree:** Trees are used to represent minimax trees. Each move is a node, and each possible outcome is an edge.

### Terminology

- **Root:** The topmost node in a tree.
- **Parent:** A node that has one or more child nodes.
- **Child:** A node that has a parent node.
- **Sibling:** A node that has the same parent node.
- **Leaf:** A node that has no child nodes.
- **Edge:** A connection between two nodes.
- **Path:** A sequence of nodes that are connected by edges.
- **Height:** The number of edges on the longest path from the root to a leaf.
- **Depth:** The number of edges on the path from a node to the root.
- **Degree:** The number of child nodes a node has.
- **Degree of Tree:** The maximum degree of all the nodes in a tree.
- **Level:** The number of edges on the path from a node to the root, plus one.
- **Branching Factor:** The number of child nodes a node can have.
- **Binary Tree:** A tree in which each node has at most two child nodes.
- **Binary Search Tree:** A binary tree in which the left child node is less than the parent node, and the right child node is greater than the parent node.
- **General Tree:** A tree in which each node can have zero or more child nodes.
- **Balanced Tree:** A tree in which the height of the left and right subtrees of every node differs by at most one.
- **Complete Tree:** A tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
- **Traversal:** The process of visiting every node in a tree.

### Types of Traverse

- **Pre-Order:** Visit the root node first, then visit the left subtree, and finally visit the right subtree. So for example, if you have the following tree:

```
    A
   / \
  B   C
 / \
D   E
```

The pre-order traversal would be A, B, D, E, C.

- **In-Order:** Visit the left subtree first, then visit the root node, and finally visit the right subtree. So for example, if you have the following tree:

```
    A
   / \
  B   C
 / \
D   E
```

The in-order traversal would be D, B, E, A, C.

- **Post-Order:** Visit the left subtree first, then visit the right subtree, and finally visit the root node. So for example, if you have the following tree:

```
    A
   / \
  B   C
 / \
D   E
```

The post-order traversal would be D, E, B, C, A.

### Binary Trees

A binary tree is a tree in which each node has at most two child nodes. The left child node is called the left subtree, and the right child node is called the right subtree. A binary tree can be empty, meaning that it doesn't contain any nodes. A binary tree can also be full, meaning that every node has two child nodes. A binary tree can also be complete, meaning that every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

#### Interface

- **Insert:** Inserts a node into the tree.
- **Remove:** Removes a node from the tree.
- **Contains:** Returns true if the tree contains the specified node.
- **Clear:** Removes all nodes from the tree.
- **Count:** Returns the number of nodes in the tree.
- **Depth:** Returns the depth of the tree.
- **Height:** Returns the height of the tree.
- **IsBalanced:** Returns true if the tree is balanced.
- **IsComplete:** Returns true if the tree is complete.
- **Traversal:** Traverses the tree in the specified order.
- **Print:** Prints the tree.

#### Complexity

https://www.youtube.com/@ThePrimeTimeagen
| Operation | Complexity |
| ------------------- | ---------- |
| Insert | O(log n) |
| Remove | O(log n) |
| Contains | O(log n) |
| Clear | O(1) |
| Count | O(1) |
| Depth | O(1) |
| Height | O(1) |
| IsBalanced | O(1) |
| IsComplete | O(1) |
| PreOrderTraversal | O(n) |
| InOrderTraversal | O(n) |
| PostOrderTraversal | O(n) |
| LevelOrderTraversal | O(n) |
| Print | O(n) |
| PrintByLevel | O(n) |

#### Implementation

C#:

```csharp
public class Node<T>
{
    public T Data { get; set; } // Data stored in the node
    public Node<T> Left { get; set; } // Reference to the left child node
    public Node<T> Right { get; set; } // Reference to the right child node

    public Node(T data)
    {
        Data = data;
    }
}

public class BinaryTree<T>
{
    private Node<T> _root; // Reference to the root node of the binary tree

    public int Count { get; private set; } // Number of nodes in the binary tree

    // Inserts a new node into the binary tree
    public void Insert(T data)
    {
        var node = new Node<T>(data); // Create a new node with the given data

        if (_root == null) // If the binary tree is empty
        {
            _root = node; // Set the new node as the root node
        }
        else
        {
            var current = _root; // Start from the root node

            while (true)
            {
                if (Comparer<T>.Default.Compare(data, current.Data) < 0) // If the data is less than the current node's data
                {
                    if (current.Left == null) // If the left child node is null
                    {
                        current.Left = node; // Set the new node as the left child node
                        break;
                    }

                    current = current.Left; // Move to the left child node
                }
                else // If the data is greater than or equal to the current node's data
                {
                    if (current.Right == null) // If the right child node is null
                    {
                        current.Right = node; // Set the new node as the right child node
                        break;
                    }

                    current = current.Right; // Move to the right child node
                }
            }
        }

        Count++; // Increment the count of nodes in the binary tree
    }

    // Removes a node from the binary tree
    public void Remove(T data)
    {
        _root = Remove(_root, data); // Call the private Remove method to remove the node
    }

    private Node<T> Remove(Node<T> node, T data)
    {
        if (node == null) // If the node is null
        {
            return null; // Return null
        }

        if (Comparer<T>.Default.Compare(data, node.Data) < 0) // If the data is less than the current node's data
        {
            node.Left = Remove(node.Left, data); // Recursively remove the node from the left subtree
        }
        else if (Comparer<T>.Default.Compare(data, node.Data) > 0) // If the data is greater than the current node's data
        {
            node.Right = Remove(node.Right, data); // Recursively remove the node from the right subtree
        }
        else // If the data is equal to the current node's data
        {
            if (node.Left == null) // If the left child node is null
            {
                return node.Right; // Return the right child node
            }

            if (node.Right == null) // If the right child node is null
            {
                return node.Left; // Return the left child node
            }

            var temp = node; // Store the reference to the current node
            node = Min(temp.Right); // Find the minimum node in the right subtree and set it as the current node
            node.Right = RemoveMin(temp.Right); // Remove the minimum node from the right subtree and set its right child as the right child of the current node
            node.Left = temp.Left; // Set the left child of the current node as the left child of the new current node
        }

        return node; // Return the updated node
    }

    // Checks if the binary tree contains a specific node
    public bool Contains(T data)
    {
        var current = _root; // Start from the root node

        while (current != null)
        {
            if (Comparer<T>.Default.Compare(data, current.Data) < 0) // If the data is less than the current node's data
            {
                current = current.Left; // Move to the left child node
            }
            else if (Comparer<T>.Default.Compare(data, current.Data) > 0) // If the data is greater than the current node's data
            {
                current = current.Right; // Move to the right child node
            }
            else // If the data is equal to the current node's data
            {
                return true; // Return true
            }
        }

        return false; // Return false if the data is not found
    }

    // Clears the binary tree by setting the root node to null and count to 0
    public void Clear()
    {
        _root = null; // Set the root node to null
        Count = 0; // Set the count to 0
    }

    // Returns the depth of the binary tree
    public int Depth()
    {
        return Depth(_root); // Call the private Depth method to calculate the depth of the binary tree
    }

    private int Depth(Node<T> node)
    {
        if (node == null) // If the node is null
        {
            return 0; // Return 0
        }

        return 1 + Math.Max(Depth(node.Left), Depth(node.Right)); // Return 1 plus the maximum depth of the left and right subtrees
    }

    // Returns the height of the binary tree
    public int Height()
    {
        return Height(_root); // Call the private Height method to calculate the height of the binary tree
    }

    private int Height(Node<T> node)
    {
        if (node == null) // If the node is null
        {
            return -1; // Return -1
        }

        return 1 + Math.Max(Height(node.Left), Height(node.Right)); // Return 1 plus the maximum height of the left and right subtrees
    }

    // Checks if the binary tree is balanced
    public bool IsBalanced()
    {
        return IsBalanced(_root); // Call the private IsBalanced method to check if the binary tree is balanced
    }

    private bool IsBalanced(Node<T> node)
    {
        if (node == null) // If the node is null
        {
            return true; // Return true
        }

        var leftHeight = Height(node.Left); // Calculate the height of the left subtree
        var rightHeight = Height(node.Right); // Calculate the height of the right subtree

        if (Math.Abs(leftHeight - rightHeight) <= 1 && IsBalanced(node.Left) && IsBalanced(node.Right)) // If the difference between the heights of the left and right subtrees is less than or equal to 1 and both subtrees are balanced
        {
            return true; // Return true
        }

        return false; // Return false if the binary tree is not balanced
    }

    // Checks if the binary tree is complete
    public bool IsComplete()
    {
        return IsComplete(_root); // Call the private IsComplete method to check if the binary tree is complete
    }

    private bool IsComplete(Node<T> node)
    {
        if (node == null) // If the node is null
        {
            return true; // Return true
        }

        var leftHeight = Height(node.Left); // Calculate the height of the left subtree
        var rightHeight = Height(node.Right); // Calculate the height of the right subtree

        if (leftHeight == rightHeight) // If the heights of the left and right subtrees are equal
        {
            return IsComplete(node.Right); // Recursively check if the right subtree is complete
        }

        if (leftHeight == rightHeight + 1) // If the height of the left subtree is one more than the height of the right subtree
        {
            return IsComplete(node.Left) && IsComplete(node.Right); // Recursively check if both subtrees are complete
        }

        return false; // Return false if the binary tree is not complete
    }

    // Performs pre-order traversal on the binary tree
    public void PreOrderTraversal(Action<T> action)
    {
        PreOrderTraversal(_root, action); // Call the private PreOrderTraversal method to perform pre-order traversal
    }

    private void PreOrderTraversal(Node<T> node, Action<T> action)
    {
        if (node == null) // If the node is null
        {
            return; // Return
        }

        action(node.Data); // Perform the action on the current node's data
        PreOrderTraversal(node.Left, action); // Recursively perform pre-order traversal on the left subtree
        PreOrderTraversal(node.Right, action); // Recursively perform pre-order traversal on the right subtree
    }

    // Performs in-order traversal on the binary tree
    public void InOrderTraversal(Action<T> action)
    {
        InOrderTraversal(_root, action); // Call the private InOrderTraversal method to perform in-order traversal
    }

    private void InOrderTraversal(Node<T> node, Action<T> action)
    {
        if (node == null) // If the node is null
        {
            return; // Return
        }

        InOrderTraversal(node.Left, action); // Recursively perform in-order traversal on the left subtree
        action(node.Data); // Perform the action on the current node's data
        InOrderTraversal(node.Right, action); // Recursively perform in-order traversal on the right subtree
    }

    // Performs post-order traversal on the binary tree
    public void PostOrderTraversal(Action<T> action)
    {
        PostOrderTraversal(_root, action); // Call the private PostOrderTraversal method to perform post-order traversal
    }

    private void PostOrderTraversal(Node<T> node, Action<T> action)
    {
        if (node == null) // If the node is null
        {
            return; // Return
        }

        PostOrderTraversal(node.Left, action); // Recursively perform post-order traversal on the left subtree
        PostOrderTraversal(node.Right, action); // Recursively perform post-order traversal on the right subtree
        action(node.Data); // Perform the action on the current node's data
    }

    // Prints the binary tree
    public void Print()
    {
        Print(_root); // Call the private Print method to print the binary tree
    }

    private void Print(Node<T> node)
    {
        if (node == null) // If the node is null
        {
            return; // Return
        }

        Console.Write(node.Data + " "); // Print the current node's data

        if (node.Left != null) // If the left child node is not null
        {
            Console.Write("L: " + node.Left.Data + " "); // Print the left child node's data
        }

        if (node.Right != null) // If the right child node is not null
        {
            Console.Write("R: " + node.Right.Data + " "); // Print the right child node's data
        }

        Console.WriteLine(); // Print a new line

        Print(node.Left); // Recursively print the left subtree
        Print(node.Right); // Recursively print the right subtree
    }

    // Prints the binary tree by level
    public void PrintByLevel()
    {
        var height = Height(); // Calculate the height of the binary tree
        var width = (int)Math.Pow(2, height); // Calculate the width of the binary tree
        var array = new string[height + 1, width]; // Create a 2D array to store the nodes at each level
        PrintByLevel(_root, array, 0, 0, width - 1); // Call the private PrintByLevel method to populate the array
        Print(array); // Print the array
    }

    private void PrintByLevel(Node<T> node, string[,] array, int level, int left, int right)
    {
        if (node == null) // If the node is null
        {
            return; // Return
        }

        var mid = (left + right) / 2; // Calculate the mid index of the current level
        array[level, mid] = node.Data.ToString(); // Store the current node's data in the array
        PrintByLevel(node.Left, array, level + 1, left, mid - 1); // Recursively populate the array for the left subtree
        PrintByLevel(node.Right, array, level + 1, mid + 1, right); // Recursively populate the array for the right subtree
    }
}
```

## Tree Search

### Breadth-First Search

#### Description

Breadth-first search is a tree search algorithm that starts at the root node and explores the neighbor nodes first, before moving to the next level neighbors. It's a level-order tree traversal algorithm that uses a queue to keep track of the nodes to visit next. It's often used to find the shortest path between two nodes in a tree. It's also called level-order traversal. So for example for the below tree:

```
    A
   / \
  B   C
 / \
D   E
```

The breadth-first search would visit the nodes in the following order: A, B, C, D, E.

#### Characteristics

- It doesn't preserve the shape of the tree.

#### Implementation

C#:

```csharp
public static void BreadthFirstSearch(Node<T> root, T value)
{
    // Create a queue to store the nodes to visit
    var queue = new Queue<Node<T>>();
    // Enqueue the root node
    queue.Enqueue(root);

    // Continue the loop until the queue is empty
    while (queue.Count > 0)
    {
        // Dequeue a node from the front of the queue
        var node = queue.Dequeue();

        // Check if the node's data matches the target value
        if (node.Data.Equals(value))
        {
            // If a match is found, print "Found" and return
            Console.WriteLine("Found");
            return;
        }

        // Enqueue the left child if it exists
        if (node.Left != null)
        {
            queue.Enqueue(node.Left);
        }

        // Enqueue the right child if it exists
        if (node.Right != null)
        {
            queue.Enqueue(node.Right);
        }
    }

    // If the loop completes without finding a match, print "Not found"
    Console.WriteLine("Not found");
}
```

### Depth-First Search

#### Description

Depth-first search is a tree search algorithm that starts at the root node and explores the neighbor nodes at the deepest level first, before moving to the next level neighbors. It's a pre-order tree traversal algorithm that uses a stack to keep track of the nodes to visit next. It's often used to find the shortest path between two nodes in a tree. It's also called pre-order traversal. So for example for the below tree:

```
    A
   / \
  B   C
 / \
D   E
```

The depth-first search would visit the nodes in the following order: A, B, D, E, C.

#### Characteristics

- It preserves the shape of the tree.

#### Implementation

C#:

```csharp
public static void DepthFirstSearch(Node<T> root, T value)
{
    // Check if the current node is null
    if (root == null)
    {
        return;
    }

    // Check if the value of the current node matches the target value
    if (root.Data.Equals(value))
    {
        Console.WriteLine("Found");
        return;
    }

    // Recursively call DepthFirstSearch on the left child of the current node
    DepthFirstSearch(root.Left, value);

    // Recursively call DepthFirstSearch on the right child of the current node
    DepthFirstSearch(root.Right, value);
}
```

### Compare Two Trees

#### Description

In this example, we will compare two trees to see if they are equal. Depending on the case we will use either breadth-first search or depth-first search. If we want to compare just the values of the nodes, then we can use breadth-first search. If we want to consider also the shape of the trees, then we must use depth-first search.

#### Why Breadth-First Search can't be used to compare the shape of the trees?

Breadth-first search can't be used to compare the shape of the trees because it doesn't preserve the shape of the trees. It only preserves the order of the nodes. So for example, if we have the following two trees:

```
    A
   / \
  B   C
```

```
     A
    /
   B
  /
 C
```

Breadth-first search would visit the nodes of both trees in the following order: A, B, C. So it would consider both trees to be equal, even though they are not.

But if we use depth-first search, then it's possible for us to check that the childrens of B and C on the first tree are null, while the childrens of B on the second tree are not null. So we can use depth-first search to compare the shape of the trees.

#### Implementation 1 - Compare Values

C#:

```csharp
public static bool CompareTrees(Node<T> root1, Node<T> root2)
{
    // Create two queues to store the nodes of the trees
    var queue1 = new Queue<Node<T>>();
    var queue2 = new Queue<Node<T>>();

    // Enqueue the root nodes of both trees
    queue1.Enqueue(root1);
    queue2.Enqueue(root2);

    // Continue the loop until both queues are empty
    while (queue1.Count > 0 && queue2.Count > 0)
    {
        // Dequeue a node from each queue
        var node1 = queue1.Dequeue();
        var node2 = queue2.Dequeue();

        // Check if the data in the nodes is not equal
        if (!node1.Data.Equals(node2.Data))
        {
            // Return false if the data is not equal, indicating different values
            return false;
        }

        // Enqueue the left child of node1 if it exists
        if (node1.Left != null)
        {
            queue1.Enqueue(node1.Left);
        }

        // Enqueue the right child of node1 if it exists
        if (node1.Right != null)
        {
            queue1.Enqueue(node1.Right);
        }

        // Enqueue the left child of node2 if it exists
        if (node2.Left != null)
        {
            queue2.Enqueue(node2.Left);
        }

        // Enqueue the right child of node2 if it exists
        if (node2.Right != null)
        {
            queue2.Enqueue(node2.Right);
        }
    }

    // Return true if both queues are empty, indicating equal values and shape
    return queue1.Count == 0 && queue2.Count == 0;
}
```

#### Implementation 2 - Compare Values and Shape

C#:

```csharp
public static bool CompareTrees(Node<T> root1, Node<T> root2)
{
    // Check if both roots are null, indicating empty trees
    if (root1 == null && root2 == null)
    {
        return true;
    }

    // Check if only one of the roots is null, indicating different tree shapes
    if (root1 == null || root2 == null)
    {
        return false;
    }

    // Check if the data in the roots is equal
    if (root1.Data.Equals(root2.Data))
    {
        // Recursively compare the left and right subtrees
        return CompareTrees(root1.Left, root2.Left) && CompareTrees(root1.Right, root2.Right);
    }

    // If the data in the roots is not equal, the trees are different
    return false;
}
```

### Binary Search Tree

#### Description

A binary search tree is a binary tree in which the left child node is less than the parent node, and the right child node is greater than the parent node. It's often used to store a collection of elements. It's also called BST. That property allows us to search for an element in O(log n) time. This search algorithm is called binary search, half-interval search, logarithmic search, or binary chop. It looks very similar to the binary search algorithm for arrays, but it's slightly different. So for example, if we have the following tree:

```
    5
   / \
  3   7
 / \
1   4
```

The binary search would search for the value 4 in the following order: 5, 3, 4. Following this steps:

- Compare the value 4 with the value 5. Since 4 is less than 5, we go to the left subtree.
- Compare the value 4 with the value 3. Since 4 is greater than 3, we go to the right subtree.
- Compare the value 4 with the value 4. Since 4 is equal to 4, we found the value.
- Return the value 4.

#### Implementation

C#:

```csharp
public class BinarySearchTree
{
    private Node<int> _root;

    // Insert method to add a new node to the binary search tree
    public void Insert(int data)
    {
        var node = new Node<int>(data);

        if (_root == null)
        {
            _root = node;
        }
        else
        {
            var current = _root;

            // Traverse the tree to find the appropriate position for the new node
            while (true)
            {
                if (data < current.Data)
                {
                    if (current.Left == null)
                    {
                        current.Left = node;
                        break;
                    }

                    current = current.Left;
                }
                else
                {
                    if (current.Right == null)
                    {
                        current.Right = node;
                        break;
                    }

                    current = current.Right;
                }
            }
        }
    }

    // Remove method to remove a node from the binary search tree
    public void Remove(int data)
    {
        _root = Remove(_root, data);
    }

    // Recursive helper method to remove a node from the binary search tree
    private Node<int> Remove(Node<int> node, int data)
    {
        if (node == null)
        {
            return null;
        }

        if (data < node.Data)
        {
            node.Left = Remove(node.Left, data);
        }
        else if (data > node.Data)
        {
            node.Right = Remove(node.Right, data);
        }
        else
        {
            // Case 1: Node to be removed has no children
            if (node.Left == null)
            {
                return node.Right;
            }

            // Case 2: Node to be removed has only one child
            if (node.Right == null)
            {
                return node.Left;
            }

            // Case 3: Node to be removed has two children
            var temp = node;
            node = Min(temp.Right);
            node.Right = RemoveMin(temp.Right);
            node.Left = temp.Left;
        }

        return node;
    }

    // Find the minimum value node in the binary search tree
    public Node<int> Min()
    {
        return Min(_root);
    }

    // Recursive helper method to find the minimum value node in the binary search tree
    private Node<int> Min(Node<int> node)
    {
        if (node.Left == null)
        {
            return node;
        }

        return Min(node.Left);
    }

    // Remove the minimum value node from the binary search tree
    private Node<int> RemoveMin(Node<int> node)
    {
        if (node.Left == null)
        {
            return node.Right;
        }

        node.Left = RemoveMin(node.Left);
        return node;
    }

    // Check if the binary search tree contains a specific value
    public bool Contains(int data)
    {
        var current = _root;

        return Contains(current, data);
    }

    // Recursive helper method to check if the binary search tree contains a specific value
    private bool Contains(Node<int> node, int data)
    {
        if (node == null)
        {
            return false;
        }

        if (node.Data == data)
        {
            return true;
        }

        if (data < node.Data)
        {
            node = node.Left;
        }
        else
        {
            node = node.Right;
        }

        return Contains(node, data);
    }
}
```

## Binary Heap

### Description

A binary heap is a binary tree in which the parent node is greater than or equal to the child nodes (max-heap), or the parent node is less than or equal to the child nodes (min-heap). It's often used to implement a priority queue. It's also called heap. That property allows us to find the maximum element in O(1) time. This search algorithm is called max-heap. Whenever a node is added or deleted, the heap must be reorganized to maintain the heap property. This reorganization is called heapify. There is no traversal algorithm for heaps.

### Real-World Examples

- **Priority Queue:** Heaps are used to implement priority queues. Each element in the priority queue is a node in the heap. The priority of each element is determined by the value of the node. The maximum element in the priority queue is the root node of the heap.
- **Heap Sort:** Heaps are used to implement heap sort. Each element in the array is a node in the heap. The maximum element in the array is the root node of the heap.
- **Graph Algorithms:** Heaps are used to implement graph algorithms. Each vertex in the graph is a node in the heap. The maximum element in the graph is the root node of the heap.

### Characteristics

- It's a binary tree, meaning that each node has at most two child nodes.
- It's a complete tree, meaning that every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
- It's a balanced tree, meaning that the height of the left and right subtrees of every node differs by at most one.

### Interface

- **Insert:** Inserts a new element into the heap.
- **Remove:** Removes an element from the heap.
- **Find:** Finds an element in the heap.
- **Print:** Prints the heap.

### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Insert    | O(log n)   |
| Remove    | O(log n)   |
| Find      | O(n)       |
| Print     | O(n)       |

### Implementation

C#:

```csharp
public class BinaryHeap
{
    private int[] _array; // Array to store the elements in the heap
    private int _count; // Number of elements in the heap

    // Constructor to initialize the heap
    public BinaryHeap(int capacity)
    {
        _array = new int[capacity];
    }

    // Insert method to add a new element to the heap
    public void Insert(int value)
    {
        // Check if the heap is full
        if (_count == _array.Length)
        {
            // Resize the array
            var array = new int[_array.Length * 2];

            // Copy the elements from the old array to the new array
            for (int i = 0; i < _array.Length; i++)
            {
                array[i] = _array[i];
            }

            // Set the new array as the array of the heap
            _array = array;
        }

        // Add the new element to the end of the heap
        _array[_count] = value;

        // Heapify the heap
        HeapifyUp(_count);

        // Increment the count of elements in the heap
        _count++;
    }

    // Remove method to remove an element from the heap
    public void Remove(int value)
    {
        // Find the index of the element to be removed
        var index = Find(value);

        // Check if the element is not found
        if (index == -1)
        {
            return;
        }

        // Replace the element with the last element in the heap
        _array[index] = _array[_count - 1];

        // Decrement the count of elements in the heap
        _count--;

        // Heapify the heap
        HeapifyDown(index);
    }

    // Find method to find an element in the heap
    public int Find(int value)
    {
        // Loop through the elements in the heap
        for (int i = 0; i < _count; i++)
        {
            // Check if the current element is equal to the value
            if (_array[i] == value)
            {
                // Return the index of the element
                return i;
            }
        }

        // Return -1 if the element is not found
        return -1;
    }

    // HeapifyUp method to reorganize the heap after inserting an element
    private void HeapifyUp(int index)
    {
        // Find the index of the parent node
        var parent = (index - 1) / 2;

        // Check if the parent node is greater than the current node
        if (_array[parent] > _array[index])
        {
            // Swap the parent node with the current node
            Swap(parent, index);

            // Heapify the heap from the parent node
            HeapifyUp(parent);
        }
    }

    // HeapifyDown method to reorganize the heap after removing an element
    private void HeapifyDown(int index)
    {
        // Find the index of the left and right child nodes
        var left = 2 * index + 1;
        var right = 2 * index + 2;

        // Check if the left child node is greater than the current node
        if (left < _count && _array[left] < _array[index])
        {
            // Swap the left child node with the current node
            Swap(left, index);

            // Heapify the heap from the left child node
            HeapifyDown(left);
        }

        // Check if the right child node is greater than the current node
        if (right < _count && _array[right] < _array[index])
        {
            // Swap the right child node with the current node
            Swap(right, index);

            // Heapify the heap from the right child node
            HeapifyDown(right);
        }
    }

    // Swap method to swap two elements in the heap
    private void Swap(int index1, int index2)
    {
        var temp = _array[index1];
        _array[index1] = _array[index2];
        _array[index2] = temp;
    }

    // Print method to print the heap
    public void Print()
    {
        // Loop through the elements in the heap
        for (int i = 0; i < _count; i++)
        {
            // Print the current element
            Console.Write(_array[i] + " ");
        }

        // Print a new line
        Console.WriteLine();
    }
}
```

## Trie Tree

### Description

A trie tree is a tree in which each node represents a character in a string. It's often used to store a collection of strings. It's also called radix tree, prefix tree, or digital tree. That property allows us to search for a string in O(m) time, where m is the length of the string. This search algorithm is called trie search. It looks very similar to the binary search algorithm for arrays, but it's slightly different.

### Real-World Examples

- **Spell Checker:** Tries are used to implement spell checkers. Each word in the dictionary is a node in the trie. The spell checker can then check if a word is spelled correctly by searching for it in the trie.
- **Auto-Complete:** Tries are used to implement auto-complete. Each word in the dictionary is a node in the trie. The auto-complete can then suggest words by searching for them in the trie.
- **IP Routing:** Tries are used to implement IP routing. Each IP address is a node in the trie. The IP routing can then find the next hop by searching for the IP address in the trie.
- **Prefix Matching:** Tries are used to implement prefix matching. Each prefix is a node in the trie. The prefix matching can then find the longest prefix by searching for it in the trie.
- **Longest Prefix Matching:** Tries are used to implement longest prefix matching. Each prefix is a node in the trie. The longest prefix matching can then find the longest prefix by searching for it in the trie.

### Interface

- **Insert:** Inserts a new string into the trie.
- **Remove:** Removes a string from the trie.
- **Contains:** Returns true if the trie contains the specified string.
- **Print:** Prints the trie.

### Complexity

| Operation | Complexity |
| --------- | ---------- |
| Insert    | O(m)       |
| Remove    | O(m)       |
| Contains  | O(m)       |
| Print     | O(n)       |

### Implementation

C#:

```csharp
public class Node
{
    public char Data { get; set; } // Character stored in the node
    public bool IsEnd { get; set; } // Flag to indicate if the node is the end of a string
    public Dictionary<char, Node> Children { get; set; } // Dictionary to store the children of the node
    public int Score { get; set; } // Score of the node

    public Node(char data)
    {
        Data = data;
        Children = new Dictionary<char, Node>();
    }
}

public class Trie
{
    private Node _root; // Root node of the trie

    // Constructor to initialize the trie
    public Trie()
    {
        _root = new Node('^');
    }

    // Insert method to add a new string to the trie
    public void Insert(string word, int score)
    {
        var current = _root;

        // Loop through the characters in the string
        foreach (var ch in word)
        {
            // Check if the current character is not in the trie
            if (!current.Children.ContainsKey(ch))
            {
                // Add the current character to the trie
                current.Children.Add(ch, new Node(ch));
            }

            // Move to the next node
            current = current.Children[ch];
        }

        // Set the end flag to true
        current.IsEnd = true;

        // Set the score of the node
        current.Score = score;
    }

    // Remove method to remove a string from the trie
    public void Remove(string word)
    {
        var current = _root;

        // Loop through the characters in the string
        foreach (var ch in word)
        {
            // Check if the current character is not in the trie
            if (!current.Children.ContainsKey(ch))
            {
                // Return if the string is not found
                return;
            }

            // Move to the next node
            current = current.Children[ch];
        }

        // Check if the current node is not the end of a string
        if (!current.IsEnd)
        {
            // Return if the string is not found
            return;
        }

        // Set the end flag to false
        current.IsEnd = false;
    }

    // Contains method to check if the trie contains a string
    public bool Contains(string word)
    {
        var current = _root;

        // Loop through the characters in the string
        foreach (var ch in word)
        {
            // Check if the current character is not in the trie
            if (!current.Children.ContainsKey(ch))
            {
                // Return false if the string is not found
                return false;
            }

            // Move to the next node
            current = current.Children[ch];
        }

        // Return true if the string is found
        return true;
    }

    public int Score(string word)
    {
        var current = _root;

        // Loop through the characters in the string
        foreach (var ch in word)
        {
            // Check if the current character is not in the trie
            if (!current.Children.ContainsKey(ch))
            {
                // Return 0 if the string is not found
                return 0;
            }

            // Move to the next node
            current = current.Children[ch];
        }

        // Return the score of the node
        return current.Score;
    }

    private void IncrementScore(string word, int score)
    {
        var current = _root;

        // Loop through the characters in the string
        foreach (var ch in word)
        {
            // Check if the current character is not in the trie
            if (!current.Children.ContainsKey(ch))
            {
                // Return if the string is not found
                return;
            }

            // Move to the next node
            current = current.Children[ch];
        }

        // Increment the score of the node
        current.Score += score;
    }

    public string[] AutoComplete(string prefix)
    {
        var current = _root;

        // Loop through the characters in the prefix
        foreach (var ch in prefix)
        {
            // Check if the current character is not in the trie
            if (!current.Children.ContainsKey(ch))
            {
                // Return an empty array if the prefix is not found
                return new string[0];
            }

            // Move to the next node
            current = current.Children[ch];
        }

        // Create a list to store the words
        var words = new List<string>();

        // Recursively find the words
        AutoComplete(current, prefix, words);

        // Return the words
        return words.ToArray();
    }

    private void AutoComplete(Node node, string prefix, List<string> words)
    {
        // Check if the current node is the end of a string
        if (node.IsEnd)
        {
            // Add the word to the list
            words.Add(prefix);
            IncrementScore(prefix, 1);
        }

        // Loop through the children of the current node
        foreach (var child in node.Children)
        {
            // Recursively find the words
            AutoComplete(child.Value, prefix + child.Key, words);
        }
    }

    // Print method to print the trie
    public void Print()
    {
        Print(_root);
    }

    // Recursive helper method to print the trie
    private void Print(Node node)
    {
        // Print the current node
        Console.Write(node.Data + " ");

        // Check if the current node is the end of a string
        if (node.IsEnd)
        {
            Console.Write("[" + node.Score + "]");
        }

        Console.WriteLine();

        // Loop through the children of the current node
        foreach (var child in node.Children)
        {
            // Recursively print the trie
            Print(child.Value);
        }
    }
}
```
