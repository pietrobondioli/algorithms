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

Typescript:

```typescript
function constantAlgorithm(items: number[]): void {
	const result = items[0] * items[0];
	console.log(result);
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

Typescript:

```typescript
function linearAlgorithm(items: number[]): void {
	for (const item of items) {
		console.log(item);
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

Typescript:

```typescript
function quadraticAlgorithm(items: number[]): void {
	for (const item of items) {
		for (const item2 of items) {
			console.log(item, " ", item2);
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

Typescript:

```typescript
function cubicAlgorithm(items: number[]): void {
	for (const item of items) {
		for (const item2 of items) {
			for (const item3 of items) {
				console.log(item, " ", item2, " ", item3);
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

Typescript:

```typescript
function logarithmicAlgorithm(items: number[]): void {
	for (let index = 0; index < items.length; index += 3) {
		console.log(items[index]);
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

Typescript:

```typescript
function merge(left: number[], right: number[]): number[] {
	let result: number[] = [];
	let i = 0,
		j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}

	return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergesort(items: number[]): number[] {
	if (items.length <= 1) {
		return items;
	}

	let mid = Math.floor(items.length / 2);
	let left = items.slice(0, mid);
	let right = items.slice(mid);

	return merge(mergesort(left), mergesort(right));
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

Typescript:

```typescript
function fibonacci(n: number): number {
	if (n <= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
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

Typescript:

```typescript
function factorial(n: number): number {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
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

TypeScript:

```typescript
let fixedArray: number[] = Array(5);
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

TypeScript:

```typescript
let dynamicArray: number[] = [];
dynamicArray.push(1);
dynamicArray.push(2);
dynamicArray.splice(0, 1);
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
    for (int i = 0; i < list.Length; i++)
    {
        if (list[i] == item)
        {
            return i;
        }
    }

    return -1;
}
```

TypeScript:

```typescript
const linearSearch = (list: number[], item: number): number => {
	for (let i = 0; i < listExtrema
	}

	return -1;
};
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
    var low = 0;
    var high = list.Length - 1;

    while (low <= high)
    {
        var mid = (low + high) / 2;
        var guess = list[mid];

        if (guess == item)
        {
            return mid;
        }

        if (guess > item)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }

    return -1;
}
```

TypeScript:

```typescript
const binarySearch = (list: number[], item: number): number => {
	let low = 0;
	let high = list.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const guess = list[mid];

		if (guess === item) {
			return mid;
		}

		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return -1;
};
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

    while (!sorted)
    {
        sorted = true;

        for (int i = 0; i < items.Length - 1; i++)
        {
            if (items[i] > items[i + 1])
            {
                sorted = false;
                var temp = items[i];
                items[i] = items[i + 1];
                items[i + 1] = temp;
            }
        }
    }

    return items;
}
```

TypeScript:

```typescript
const bubbleSort = (items: number[]): number[] => {
	let sorted = false;

	while (!sorted) {
		sorted = true;

		for (let i = 0; i < items.length - 1; i++) {
			if (items[i] > items[i + 1]) {
				sorted = false;
				const temp = items[i];
				items[i] = items[i + 1];
				items[i + 1] = temp;
			}
		}
	}

	return items;
};
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
    if (items.Length <= 1)
    {
        return items;
    }

    var pivot = items[0];
    var left = new List<int>();
    var right = new List<int>();

    for (int i = 1; i < items.Length; i++)
    {
        if (items[i] < pivot)
        {
            left.Add(items[i]);
        }
        else
        {
            right.Add(items[i]);
        }
    }

    var result = new List<int>();
    result.AddRange(QuickSort(left.ToArray()));
    result.Add(pivot);
    result.AddRange(QuickSort(right.ToArray()));

    return result.ToArray();
}
```

TypeScript:

```typescript
const quickSort = (items: number[]): number[] => {
	if (items.length <= 1) {
		return items;
	}

	const pivot = items[0];
	const left: number[] = [];
	const right: number[] = [];

	for (let i = 1; i < items.length; i++) {
		if (items[i] < pivot) {
			left.push(items[i]);
		} else {
			right.push(items[i]);
		}
	}

	const result: number[] = [];
	result.push(...quickSort(left));
	result.push(pivot);
	result.push(...quickSort(right));

	return result;
};
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
    var left = items.Take(mid).ToArray();
    var right = items.Skip(mid).ToArray();

    return Merge(MergeSort(left), MergeSort(right));
}

public static int[] Merge(int[] left, int[] right)
{
    var result = new List<int>();
    var i = 0;
    var j = 0;

    while (i < left.Length && j < right.Length)
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

    while (i < left.Length)
    {
        result.Add(left[i]);
        i++;
    }

    while (j < right.Length)
    {
        result.Add(right[j]);
        j++;
    }

    return result.ToArray();
}
```

TypeScript:

```typescript
const mergeSort = (items: number[]): number[] => {
	if (items.length <= 1) {
		return items;
	}

	const mid = Math.floor(items.length / 2);
	const left = items.slice(0, mid);
	const right = items.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
};

const merge = (left: number[], right: number[]): number[] => {
	const result: number[] = [];
	let i = 0;
	let j = 0;

	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}

	return result.concat(left.slice(i)).concat(right.slice(j));
};
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
    public T Data { get; set; }
    public Node<T> Next { get; set; }

    public Node(T data)
    {
        Data = data;
    }
}

public class LinkedList<T>
{
    public Node<T> Head { get; set; }
    public Node<T> Tail { get; set; }

    public int Count
    {
        get
        {
            var current = Head;
            var count = 0;

            while (current != null)
            {
                count++;
                current = current.Next;
            }

            return count;
        }
    }

    public void InsertFirst(T data)
    {
        var node = new Node<T>(data);

        if (Head == null)
        {
            Head = node;
            Tail = node;
        }
        else
        {
            node.Next = Head;
            Head = node;
        }
    }

    public void InsertLast(T data)
    {
        var node = new Node<T>(data);

        if (Head == null)
        {
            Head = node;
            Tail = node;
        }
        else
        {
            Tail.Next = node;
            Tail = node;
        }
    }

    public void InsertAt(T data, int index)
    {
        if (index == 0)
        {
            InsertFirst(data);
        }
        else
        {
            var current = Head;

            for (int i = 0; i < index - 1; i++)
            {
                if (current.Next == null)
                {
                    throw new InvalidOperationException();
                }

                current = current.Next;
            }

            var node = new Node<T>(data);
            node.Next = current.Next;
            current.Next = node;
        }
    }

    public void RemoveFirst()
    {
        if (Head == null)
        {
            throw new InvalidOperationException();
        }

        if (Head == Tail)
        {
            Head = null;
            Tail = null;
        }
        else
        {
            Head = Head.Next;
        }
    }

    public void RemoveLast()
    {
        if (Head == null)
        {
            throw new InvalidOperationException();
        }

        if (Head == Tail)
        {
            Head = null;
            Tail = null;
        }
        else
        {
            var current = Head;

            while (current.Next != Tail)
            {
                current = current.Next;
            }

            current.Next = null;
            Tail = current;
        }
    }

    public void Remove(T data)
    {
        if (Head == null)
        {
            throw new InvalidOperationException();
        }

        if (Head == Tail && Head.Data.Equals(data))
        {
            Head = null;
            Tail = null;
        }
        else if (Head.Data.Equals(data))
        {
            Head = Head.Next;
        }
        else
        {
            var current = Head;

            while (current.Next != null && !current.Next.Data.Equals(data))
            {
                current = current.Next;
            }

            if (current.Next != null)
            {
                current.Next = current.Next.Next;
            }
        }
    }

    public void RemoveAt(int index)
    {
        if (Head == null)
        {
            throw new InvalidOperationException();
        }

        if (index == 0)
        {
            Head = Head.Next;
        }
        else
        {
            var current = Head;
            var previous = Head;

            for (int i = 0; i < index; i++)
            {
                if (current.Next == null)
                {
                    throw new InvalidOperationException();
                }

                previous = current;
                current = current.Next;
            }

            previous.Next = current.Next;
        }
    }

    public void Reverse()
    {
        if (Head == null)
        {
            throw new InvalidOperationException();
        }

        if (Head == Tail)
        {
            return;
        }

        var current = Head;
        Tail = Head;
        Node<T> previous = null;

        while (current != null)
        {
            var next = current.Next;
            current.Next = previous;
            previous = current;
            current = next;
        }

        Head = previous;
    }

    public void Print()
    {
        var current = Head;

        while (current != null)
        {
            Console.WriteLine(current.Data);
            current = current.Next;
        }
    }
}
```

TypeScript:

```typescript
class Node<T> {
	public data: T;
	public next: Node<T> | null;

	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList<T> {
	public head: Node<T> | null;
	public tail: Node<T> | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	public count(): number {
		let current = this.head;
		let count = 0;

		while (current !== null) {
			count++;
			current = current.next;
		}

		return count;
	}

	public insertFirst(data: T): void {
		const node = new Node(data);

		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
	}

	public insertLast(data: T): void {
		const node = new Node(data);

		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	}

	public insertAt(data: T, index: number): void {
		if (index === 0) {
			this.insertFirst(data);
		} else {
			let current = this.head;

			for (let i = 0; i < index - 1; i++) {
				if (current.next === null) {
					throw new Error("Index out of bounds");
				}

				current = current.next;
			}

			const node = new Node(data);
			node.next = current.next;
			current.next = node;
		}
	}

	public removeFirst(): void {
		if (this.head === null) {
			throw new Error("List is empty");
		}

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
		}
	}

	public removeLast(): void {
		if (this.head === null) {
			throw new Error("List is empty");
		}

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			let current = this.head;

			while (current.next !== this.tail) {
				current = current.next;
			}

			current.next = null;
			this.tail = current;
		}
	}

	public remove(data: T): void {
		if (this.head === null) {
			throw new Error("List is empty");
		}

		if (this.head === this.tail && this.head.data === data) {
			this.head = null;
			this.tail = null;
		} else if (this.head.data === data) {
			this.head = this.head.next;
		} else {
			let current = this.head;

			while (current.next !== null && current.next.data !== data) {
				current = current.next;
			}

			if (current.next !== null) {
				current.next = current.next.next;
			}
		}
	}

	public removeAt(index: number): void {
		if (this.head === null) {
			throw new Error("List is empty");
		}

		if (index === 0) {
			this.head = this.head.next;
		} else {
			let current = this.head;
			let previous = this.head;

			for (let i = 0; i < index; i++) {
				if (current.next === null) {
					throw new Error("Index out of bounds");
				}

				previous = current;
				current = current.next;
			}

			previous.next = current.next;
		}
	}

	public reverse(): void {
		if (this.head === null) {
			throw new Error("List is empty");
		}

		if (this.head === this.tail) {
			return;
		}

		let current = this.head;
		this.tail = this.head;
		let previous = null;

		while (current !== null) {
			const next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}

		this.head = previous;
	}

	public print(): void {
		let current = this.head;

		while (current !== null) {
			console.log(current.data);
			current = current.next;
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
    public T Data { get; set; }
    public Node<T> Next { get; set; }
    public Node<T> Previous { get; set; }

    public Node(T data)
    {
        Data = data;
    }
}

public class DoublyLinkedList<T>
{
    public Node<T> Head { get; set; }
    public Node<T> Tail { get; set; }

    public int Count
    {
        get
        {
            var current = Head;
            var count = 0;

            while (current != null)
            {
                count++;
                current = current.Next;
            }

            return count;
        }
    }

    public void InsertFirst(T data)
    {
        var node = new Node<T>(data);

        if (Head == null)
        {
            Head = node;
            Tail = node;
        }
        else
        {
            node.Next = Head;
            Head.Previous = node;
            Head = node;
        }
    }

    public void InsertLast(T data)
    {
        var node = new Node<T>(data);

        if (Head == null)
        {
            Head = node;
            Tail = node;
        }
        else
        {
            Tail.Next = node;
            node.Previous = Tail;
            Tail = node;
        }
    }

    public void InsertAt(T data, int index)
    {
        if (index == 0)
        {
            InsertFirst(data);
        }
        else
        {
            var current = Head;

            for (int i = 0; i < index - 1; i++)
            {
                if (current.Next == null)
                {
                    throw new InvalidOperationException();
                }

                current = current.Next;
            }

            var node = new Node<T>(data);
            node.Next = current.Next;
            node.Previous = current;
            current.Next = node;
        }
    }

    public void RemoveFirst()
    {
        if (Head == null)
        {
            throw new InvalidOperationException();
        }

        if (Head == Tail)
        {
            Head = null;
            Tail = null;
        }
        else
        {
            Head = Head.Next;
            Head.Previous = null;
        }
    }

    public void RemoveLast()
    {
        if (Head == null)
        {
            throw new InvalidOperationException();
        }

        if (Head == Tail)
        {
            Head = null;
            Tail = null;
        }
        else
        {
            Tail = Tail.Previous;
            Tail.Next = null;
        }
    }

    public void Remove(T data)
    {
        if (Head == null)
        {
            throw new InvalidOperationException();
        }

        if (Head == Tail && Head.Data.Equals(data))
        {
            Head = null;
            Tail = null;
        }
        else if (Head.Data.Equals(data))
        {
            Head = Head.Next;
            Head.Previous = null;
        }
        else
        {
            var current = Head;

            while (current.Next != null && !current.Next.Data.Equals(data))
            {
                current = current.Next;
            }

            if (current.Next != null)
            {
                current.Next = current.Next.Next;
                current.Next.Previous = current;
            }
        }
    }

    public void RemoveAt(int index)
    {
        if (Head == null)
        {
            throw new InvalidOperationException();
        }

        if (index == 0)
        {
            Head = Head.Next;
            Head.Previous = null;
        }
        else
        {
            var current = Head;
            var previous = Head;

            for (int i = 0; i < index; i++)
            {
                if (current.Next == null)
                {
                    throw new InvalidOperationException();
                }

                previous = current;
                current = current.Next;
            }

            previous.Next = current.Next;

            if (current.Next != null)
            {
                current.Next.Previous = previous;
            }
        }
    }

    public void Reverse()
    {
        if (Head == null)
        {
            throw new InvalidOperationException();
        }

        if (Head == Tail)
        {
            return;
        }

        var current = Head;
        Tail = Head;

        while (current != null)
        {
            var next = current.Next;
            current.Next = current.Previous;
            current.Previous = next;
            current = next;
        }

        Head = Tail;
        Tail = current;
    }

    public void Print()
    {
        var current = Head;

        while (current != null)
        {
            Console.WriteLine(current.Data);
            current = current.Next;
        }
    }
}
```

TypeScript:

```typescript
class Node<T> {
	public data: T;
	public next: Node<T> | null;
	public previous: Node<T> | null;

	constructor(data: T) {
		this.data = data;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList<T> {
	public head: Node<T> | null;
	public tail: Node<T> | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	public count(): number {
		let current = this.head;
		let count = 0;

		while (current !== null) {
			count++;
			current = current.next;
		}

		return count;
	}

	public insertFirst(data: T): void {
		const node = new Node(data);

		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head.previous = node;
			this.head = node;
		}
	}

	public insertLast(data: T): void {
		const node = new Node(data);

		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.previous = this.tail;
			this.tail = node;
		}
	}

	public insertAt(data: T, index: number): void {
		if (index === 0) {
			this.insertFirst(data);
		} else {
			let current = this.head;

			for (let i = 0; i < index - 1; i++) {
				if (current.next === null) {
					throw new Error("Index out of bounds");
				}

				current = current.next;
			}

			const node = new Node(data);
			node.next = current.next;
			node.previous = current;
			current.next = node;
		}
	}

	public removeFirst(): void {
		if (this.head === null) {
			throw new Error("List is empty");
		}

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.previous = null;
		}
	}

	public removeLast(): void {
		if (this.head === null) {
			throw new Error("List is empty");
		}

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = this.tail.previous;
			this.tail.next = null;
		}
	}

	public remove(data: T): void {
		if (
			this.head === null ||
			this.head === this.tail ||
			this.head.data === data
		) {
			this.removeFirst();
		} else {
			let current = this.head;

			while (current.next !== null && current.next.data !== data) {
				current = current.next;
			}

			if (current.next !== null) {
				current.next = current.next.next;
				current.next.previous = current;
			}
		}
	}

	public removeAt(index: number): void {
		if (this.head === null) {
			throw new Error("List is empty");
		}

		if (index === 0) {
			this.removeFirst();
		} else {
			let current = this.head;

			for (let i = 0; i < index; i++) {
				if (current.next === null) {
					throw new Error("Index out of bounds");
				}

				current = current.next;
			}

			current.previous.next = current.next;

			if (current.next !== null) {
				current.next.previous = current.previous;
			}
		}
	}

	public reverse(): void {
		if (this.head === null) {
			throw new Error("List is empty");
		}

		if (this.head === this.tail) {
			return;
		}

		let current = this.head;
		this.tail = this.head;

		while (current !== null) {
			const next = current.next;
			current.next = current.previous;
			current.previous = next;
			current = next;
		}

		this.head = this.tail;
		this.tail = current;
	}

	public print(): void {
		let current = this.head;

		while (current !== null) {
			console.log(current.data);
			current = current.next;
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
    public T Data { get; set; }
    public Node<T> Next { get; set; }

    public Node(T data)
    {
        Data = data;
    }
}

public class Queue<T>
{
    private Node<T> _head;
    private Node<T> _tail;

    public int Count { get; private set; }

    public void Enqueue(T data)
    {
        var node = new Node<T>(data);

        if (_head == null)
        {
            _head = node;
            _tail = node;
        }
        else
        {
            _tail.Next = node;
            _tail = node;
        }

        Count++;
    }

    public T Dequeue()
    {
        if (_head == null)
        {
            throw new InvalidOperationException();
        }

        var data = _head.Data;
        _head = _head.Next;
        Count--;
        return data;
    }

    public T Peek()
    {
        if (_head == null)
        {
            throw new InvalidOperationException();
        }

        return _head.Data;
    }

    public void Clear()
    {
        _head = null;
        _tail = null;
        Count = 0;
    }
}
```

TypeScript:

```typescript
class Node<T> {
	public data: T;
	public next: Node<T> | null;

	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

class Queue<T> {
	private head: Node<T> | null;
	private tail: Node<T> | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	public get count(): number {
		let current = this.head;
		let count = 0;

		while (current !== null) {
			count++;
			current = current.next;
		}

		return count;
	}

	public enqueue(data: T): void {
		const node = new Node(data);

		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	}

	public dequeue(): T {
		if (this.head === null) {
			throw new Error("Queue is empty");
		}

		const data = this.head.data;
		this.head = this.head.next;
		return data;
	}

	public peek(): T {
		if (this.head === null) {
			throw new Error("Queue is empty");
		}

		return this.head.data;
	}

	public clear(): void {
		this.head = null;
		this.tail = null;
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
    public T Data { get; set; }
    public Node<T> Next { get; set; }

    public Node(T data)
    {
        Data = data;
    }
}

public class Stack<T>
{
    private Node<T> _top;

    public int Count { get; private set; }

    public void Push(T data)
    {
        var node = new Node<T>(data);

        if (_top == null)
        {
            _top = node;
        }
        else
        {
            node.Next = _top;
            _top = node;
        }

        Count++;
    }

    public T Pop()
    {
        if (_top == null)
        {
            throw new InvalidOperationException();
        }

        var data = _top.Data;
        _top = _top.Next;
        Count--;
        return data;
    }

    public T Peek()
    {
        if (_top == null)
        {
            throw new InvalidOperationException();
        }

        return _top.Data;
    }

    public void Clear()
    {
        _top = null;
        Count = 0;
    }
}
```

TypeScript:

```typescript
class Node<T> {
	public data: T;
	public next: Node<T> | null;

	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

class Stack<T> {
	private top: Node<T> | null;

	constructor() {
		this.top = null;
	}

	public get count(): number {
		let current = this.top;
		let count = 0;

		while (current !== null) {
			count++;
			current = current.next;
		}

		return count;
	}

	public push(data: T): void {
		const node = new Node(data);

		if (this.top === null) {
			this.top = node;
		} else {
			node.next = this.top;
			this.top = node;
		}
	}

	public pop(): T {
		if (this.top === null) {
			throw new Error("Stack is empty");
		}

		const data = this.top.data;
		this.top = this.top.next;
		return data;
	}

	public peek(): T {
		if (this.top === null) {
			throw new Error("Stack is empty");
		}

		return this.top.data;
	}

	public clear(): void {
		this.top = null;
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

    public void Add(T item)
    {
        if (Count == _items.Length)
        {
            var newItems = new T[(Count == 0) ? 4 : Count * 2];
            _items.CopyTo(newItems, 0);
            _items = newItems;
        }

        _items[Count] = item;
        Count++;
    }

    public void Insert(T item, int index)
    {
        if (index < 0 || index > Count)
        {
            throw new IndexOutOfRangeException();
        }

        if (Count == _items.Length)
        {
            var newItems = new T[(Count == 0) ? 4 : Count * 2];
            _items.CopyTo(newItems, 0);
            _items = newItems;
        }

        for (int i = Count; i > index; i--)
        {
            _items[i] = _items[i - 1];
        }

        _items[index] = item;
        Count++;
    }

    public void RemoveAt(int index)
    {
        if (index < 0 || index >= Count)
        {
            throw new IndexOutOfRangeException();
        }

        for (int i = index; i < Count - 1; i++)
        {
            _items[i] = _items[i + 1];
        }

        Count--;
    }

    public void Remove(T item)
    {
        var index = IndexOf(item);

        if (index != -1)
        {
            RemoveAt(index);
        }
    }

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

    public bool Contains(T item)
    {
        return IndexOf(item) != -1;
    }

    public void Clear()
    {
        _items = new T[0];
        Count = 0;
    }

    public T this[int index]
    {
        get
        {
            if (index < 0 || index >= Count)
            {
                throw new IndexOutOfRangeException();
            }

            return _items[index];
        }
        set
        {
            if (index < 0 || index >= Count)
            {
                throw new IndexOutOfRangeException();
            }

            _items[index] = value;
        }
    }
}
```

TypeScript:

```typescript
class ArrayList<T> {
	private items: T[];

	constructor() {
		this.items = [];
	}

	public get count(): number {
		return this.items.length;
	}

	public add(item: T): void {
		this.items.push(item);
	}

	public insert(item: T, index: number): void {
		if (index < 0 || index > this.count) {
			throw new Error("Index out of bounds");
		}

		this.items.splice(index, 0, item);
	}

	public removeAt(index: number): void {
		if (index < 0 || index >= this.count) {
			throw new Error("Index out of bounds");
		}

		this.items.splice(index, 1);
	}

	public remove(item: T): void {
		const index = this.indexOf(item);

		if (index !== -1) {
			this.removeAt(index);
		}
	}

	public indexOf(item: T): number {
		return this.items.indexOf(item);
	}

	public contains(item: T): boolean {
		return this.indexOf(item) !== -1;
	}

	public clear(): void {
		this.items = [];
	}

	public get(index: number): T {
		if (index < 0 || index >= this.count) {
			throw new Error("Index out of bounds");
		}

		return this.items[index];
	}

	public set(index: number, item: T): void {
		if (index < 0 || index >= this.count) {
			throw new Error("Index out of bounds");
		}

		this.items[index] = item;
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

    public ArrayBuffer(int size)
    {
        _items = new byte[size];
    }

    public byte Get(int index)
    {
        if (index < 0 || index >= _items.Length)
        {
            throw new IndexOutOfRangeException();
        }

        return _items[index];
    }

    public void Set(int index, byte item)
    {
        if (index < 0 || index >= _items.Length)
        {
            throw new IndexOutOfRangeException();
        }

        _items[index] = item;
    }

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

    public void Clear()
    {
        for (int i = 0; i < _items.Length; i++)
        {
            _items[i] = 0;
        }
    }

    public int Count()
    {
        return _items.Length;
    }

    public int ByteLength()
    {
        return _items.Length;
    }

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

```typescript
const factorial = (n: number): number => {
	if (n === 0) {
		return 1;
	}

	return n * factorial(n - 1);
};
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
    if (row < 0 || row >= maze.GetLength(0) || col < 0 || col >= maze.GetLength(1))
    {
        return false;
    }

    if (maze[row, col] == 'E')
    {
        return true;
    }

    if (maze[row, col] == '#' || maze[row, col] == 'P')
    {
        return false;
    }

    maze[row, col] = 'P';

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

SolveMaze(maze, 1, 1);

for (int i = 0; i < maze.GetLength(0); i++)
{
    for (int j = 0; j < maze.GetLength(1); j++)
    {
        Console.Write(maze[i, j]);
    }

    Console.WriteLine();
}
```

TypeScript:

```typescript
const solveMaze = (maze: string[][], row: number, col: number): boolean => {
	if (row < 0 || row >= maze.length || col < 0 || col >= maze[0].length) {
		return false;
	}

	if (maze[row][col] === "E") {
		return true;
	}

	if (maze[row][col] === "#" || maze[row][col] === "P") {
		return false;
	}

	maze[row][col] = "P";

	if (solveMaze(maze, row - 1, col)) {
		return true;
	}

	if (solveMaze(maze, row + 1, col)) {
		return true;
	}

	if (solveMaze(maze, row, col - 1)) {
		return true;
	}

	if (solveMaze(maze, row, col + 1)) {
		return true;
	}

	maze[row][col] = " ";
	return false;
};

// Test (5x7)

const maze = [
	["#", "#", "#", "#", "#", "#", "#"],
	["#", " ", " ", " ", "#", " ", "#"],
	["#", " ", "#", " ", "#", " ", "#"],
	["#", " ", "#", " ", " ", " ", "#"],
	["#", " ", "#", "#", "#", " ", "#"],
	["#", " ", " ", " ", "#", " ", "#"],
	["#", "#", "#", "#", "#", "E", "#"],
];

solveMaze(maze, 1, 1);

console.log(maze.map((row) => row.join("")).join("\n"));
```
