const data=[
   {topic:"Array",
   questions:[{
    question: "What is the time complexity of accessing an element in an array?",
    options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n^2)"],
    answer: 0
    },{
      question: "What is the result of the following code snippet?\nint[] arr = {1, 2, 3, 4, 5};\nSystem.out.println(arr[3]);",
      options: ["A) 1", "B) 2", "C) 3", "D) 4"],
      answer: 3
    },{
    question: "How do you find the length of an array in Java?",
    options: ["A) Using length() method", "B) Using size() method", "C) Using length attribute", "D) Using size attribute"],
    answer: 2
    },{
      question: "What is the time complexity of sorting an array using the Bubble Sort algorithm?",
      options: ["A) O(n)", "B) O(n log n)", "C) O(n^2)", "D) O(log n)"],
      answer: 2
    },{
    question: "In which index does the last element of an array reside?",
    options: ["A) n-1", "B) n", "C) 0", "D) 1"],
    answer: 0
    }]
    
    },
   {topic:"Strings",
   questions:[
    {
      question: "Which of the following methods in Java is used to compare two strings?",
      options: ["equals()", "compareTo()", "compare()", "=="],
      answer: 0
    },
    {
      question: "What is the result of the following code snippet?\nString str = 'hello';\nSystem.out.println(str.length());",
      options: ["4", "5", "6", "1"],
      answer: 1
    },
    {
      question: "Which of the following methods in Java is used to convert all characters in a string to lowercase?",
      options: ["toLowerCase()", "toUpperCase()", "toLowerCaseCase()", "toUpperCaseCase()"],
      answer: 0
    },
    {
      question: "What does the substring() method in Java do?",
      options: ["Returns the length of the string", "Returns a new string that is a substring of the original string", "Reverses the string", "Concatenates two strings"],
      answer: 1
    },
    {
      question: "Which of the following is used to concatenate two strings in Java?",
      options: ["+ operator", "concat() method", "append() method", "join() method"],
      answer: 0
    }
  ]
  
    },
   {topic:"Hashmap",
   questions:[
    {
      question: "What is the time complexity of retrieving an element from a HashMap in Java?",
      options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n^2)"],
      answer: 0
    },
    {
      question: "Which of the following methods in Java is used to add an element to a HashMap?",
      options: ["A) add()", "B) put()", "C) insert()", "D) set()"],
      answer: 1
    },
    {
      question: "What happens if you try to add a duplicate key to a HashMap?",
      options: ["A) It replaces the existing key-value pair with the new one", "B) It throws a compile-time error", "C) It throws a runtime error", "D) It ignores the new key-value pair"],
      answer: 0
    },
    {
      question: "How do you check if a key exists in a HashMap in Java?",
      options: ["A) Using containsKey() method", "B) Using containsValue() method", "C) Using keyExists() method", "D) Using valueExists() method"],
      answer: 0
    },
    {
      question: "What happens if you try to retrieve a value for a key that does not exist in a HashMap?",
      options: ["A) It returns null", "B) It throws a NullPointerException", "C) It returns -1", "D) It throws a NoSuchElementException"],
      answer: 0
    }
  ]
  
    },
   {topic:"BST",
   questions:[
    {
      question: "What is the maximum number of children a node can have in a binary tree?",
      options: ["A) 0", "B) 1", "C) 2", "D) Unlimited"],
      answer: 2
    },
    {
      question: "In a binary tree, what is an internal node?",
      options: ["A) A node with no children", "B) A node with exactly one child", "C) A node with two children", "D) A leaf node"],
      answer: 2
    },
    {
      question: "Which traversal of a binary tree visits the nodes in the order Left-Root-Right?",
      options: ["A) Preorder traversal", "B) Inorder traversal", "C) Postorder traversal", "D) Level order traversal"],
      answer: 1
    },
    {
      question: "What is the time complexity of finding the height of a binary tree?",
      options: ["A) O(log n)", "B) O(n)", "C) O(n^2)", "D) O(1)"],
      answer: 1
    },
    {
      question: "How do you check if a binary tree is balanced?",
      options: ["A) By checking if the heights of the left and right subtrees differ by more than 1", "B) By checking if the tree has an equal number of left and right children", "C) By checking if the tree has only leaf nodes", "D) By checking if the tree is full"],
      answer: 0
    }
  ]
  
  
  
    },
   {topic:"Binary Trees",
   questions:[
    {
      question: "What is the maximum number of children a node can have in a binary tree?",
      options: ["A) 0", "B) 1", "C) 2", "D) Unlimited"],
      answer: 2
    },
    {
      question: "In a binary tree, what is an internal node?",
      options: ["A) A node with no children", "B) A node with exactly one child", "C) A node with two children", "D) A leaf node"],
      answer: 2
    },
    {
      question: "Which traversal of a binary tree visits the nodes in the order Left-Root-Right?",
      options: ["A) Preorder traversal", "B) Inorder traversal", "C) Postorder traversal", "D) Level order traversal"],
      answer: 1
    },
    {
      question: "What is the time complexity of finding the height of a binary tree?",
      options: ["A) O(log n)", "B) O(n)", "C) O(n^2)", "D) O(1)"],
      answer: 1
    },
    {
      question: "How do you check if a binary tree is balanced?",
      options: ["A) By checking if the heights of the left and right subtrees differ by more than 1", "B) By checking if the tree has an equal number of left and right children", "C) By checking if the tree has only leaf nodes", "D) By checking if the tree is full"],
      answer: 0
    }
  ]
    },
   {topic:"Stack",
   questions:
   [
     {
       question: "Which of the following operations adds an element to the top of a stack?",
       options: ["A) push()", "B) pop()", "C) peek()", "D) dequeue()"],
       answer: 0
     },
     {
       question: "In a stack, which element can be accessed first?",
       options: ["A) Top element", "B) Bottom element", "C) Middle element", "D) Random element"],
       answer: 0
     },
     {
       question: "What is the time complexity of the push() operation in a stack implemented using an array?",
       options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n^2)"],
       answer: 0
     },
     {
       question: "Which of the following data structures uses the Last In, First Out (LIFO) principle?",
       options: ["A) Queue", "B) Stack", "C) Deque", "D) Priority Queue"],
       answer: 1
     },
     {
       question: "What happens if you try to pop an element from an empty stack?",
       options: ["A) It throws a StackOverflowError", "B) It throws a NullPointerException", "C) It returns null", "D) It throws an EmptyStackException"],
       answer: 3
     }
   ]
    },
   {topic:"Queue",
   questions:
   [
     {
       question: "Which of the following operations removes an element from the front of a queue?",
       options: ["A) push()", "B) pop()", "C) peek()", "D) dequeue()"],
       answer: 3
     },
     {
       question: "In a queue, which element can be accessed first?",
       options: ["A) Front element", "B) Rear element", "C) Middle element", "D) Random element"],
       answer: 0
     },
     {
       question: "What is the time complexity of the enqueue() operation in a queue implemented using an array?",
       options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n^2)"],
       answer: 0
     },
     {
       question: "Which of the following data structures uses the First In, First Out (FIFO) principle?",
       options: ["A) Stack", "B) Queue", "C) Deque", "D) Priority Queue"],
       answer: 1
     },
     {
       question: "What happens if you try to dequeue an element from an empty queue?",
       options: ["A) It throws a StackOverflowError", "B) It throws a NullPointerException", "C) It returns null", "D) It throws an NoSuchElementException"],
       answer: 3
     }
   ]
   
    },
   {topic:"Linked List",
   questions:[
    {
      question: "What is a linked list?",
      options: ["A) A data structure that stores elements in contiguous memory locations", "B) A data structure consisting of a sequence of elements where each element points to the next element", "C) A data structure used to implement stacks and queues", "D) A data structure that allows random access to elements"],
      answer: 1
    },
    {
      question: "What are the advantages of using a linked list over an array?",
      options: ["A) Constant time access to elements", "B) Dynamic size and efficient insertion/deletion operations", "C) Compact memory representation", "D) Cache locality"],
      answer: 1
    },
    {
      question: "What is the time complexity for inserting an element at the beginning of a singly linked list?",
      options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n^2)"],
      answer: 0
    },
    {
      question: "What are the different types of linked lists?",
      options: ["A) Singly linked list, doubly linked list, circular linked list", "B) Stack, queue, deque", "C) Binary linked list, ternary linked list, quaternary linked list", "D) Static linked list, dynamic linked list, hybrid linked list"],
      answer: 0
    },
    {
      question: "What is the role of a pointer in a linked list node?",
      options: ["A) It stores the value of the node", "B) It points to the previous node in a doubly linked list", "C) It points to the next node in the linked list", "D) It stores the index of the node in the list"],
      answer: 2
    }
  ]
  
    },
   {topic:"Graphs",
   questions:[
    {
      question: "What is a graph?",
      options: ["A) A data structure used to represent hierarchical relationships", "B) A data structure consisting of a set of nodes and edges that connect pairs of nodes", "C) A linear data structure", "D) A data structure used for sorting elements"],
      answer: 1
    },
    {
      question: "What is Depth-First Search (DFS) used for?",
      options: ["A) Finding the shortest path between two nodes in a graph", "B) Finding cycles in a graph", "C) Finding the maximum flow in a graph", "D) Finding the minimum spanning tree of a graph"],
      answer: 1
    },
    {
      question: "What is Breadth-First Search (BFS) used for?",
      options: ["A) Finding the shortest path between two nodes in a graph", "B) Finding cycles in a graph", "C) Finding the maximum flow in a graph", "D) Finding the minimum spanning tree of a graph"],
      answer: 0
    },
    {
      question: "Which data structure is typically used to implement DFS and BFS algorithms?",
      options: ["A) Stack for DFS, Queue for BFS", "B) Queue for DFS, Stack for BFS", "C) Stack for both DFS and BFS", "D) Queue for both DFS and BFS"],
      answer: 0
    },
    {
      question: "What is the time complexity of both DFS and BFS algorithms?",
      options: ["A) O(V), where V is the number of vertices", "B) O(E), where E is the number of edges", "C) O(V + E), where V is the number of vertices and E is the number of edges", "D) O(log V), where V is the number of vertices"],
      answer: 2
    }
  ]
  
    },
  ];
  
  export default data;