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
      - [Implementation](#implementation)
    - [Binary Search](#binary-search)
      - [Description](#description-1)
      - [Use Cases](#use-cases-1)
      - [Implementation](#implementation-1)
      - [The Two Crystal Balls Problem](#the-two-crystal-balls-problem)
        - [Binary Search Solution](#binary-search-solution)
        - [Square Root of N Approach](#square-root-of-n-approach)

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

Python:

```python
def constant_algorithm(items):
    result = items[0] * items[0]
    print(result)
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

Python:

```python
def linear_algorithm(items):
    for item in items:
        print(item)
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

Python:

```python
def quadratic_algorithm(items):
    for item in items:
        for item2 in items:
            print(item, ' ', item2)
```

##### O(n^3) - Cubic

C#:

```csharp
void CubicAlgorithm(int[] items) {
    foreach (int item in items) {
        foreach (int item2 in items) {
            foreach (int item3 in items) {
                Console.WriteLine(item + " " + item2 + " " + item3);
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

Python:

```python
def cubic_algorithm(items):
    for item in items:
        for item2 in items:
            for item3 in items:
                print(item, ' ', item2, ' ', item3)
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

Python:

```python
def logarithmic_algorithm(items):
    for index in range(0, len(items), 3):
        print(items[index])
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

Python:

```python
def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result

def mergesort(items):
    if len(items) <= 1:
        return items

    mid = len(items) // 2
    left = items[:mid]
    right = items[mid:]

    left = mergesort(left)
    right = mergesort(right)
    return merge(left, right)

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

Python:

```python
def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)
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

Python:

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)
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

Python:

```python
fixed_array = (1, 2, 3, 4, 5)
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

Python:

```python
dynamic_array = []
dynamic_array.append(1)
dynamic_array.append(2)
dynamic_array.remove(1)
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
	for (let i = 0; i < list.length; i++) {
		if (list[i] === item) {
			return i;
		}
	}

	return -1;
};
```

Python:

```python
def linear_search(list, item):
    for i in range(len(list)):
        if list[i] == item:
            return i

    return -1
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

Python:

```python
def binary_search(list, item):
    low = 0
    high = len(list) - 1

    while low <= high:
        mid = (low + high) // 2
        guess = list[mid]

        if guess == item:
            return mid

        if guess > item:
            high = mid - 1
        else:
            low = mid + 1

    return -1
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
