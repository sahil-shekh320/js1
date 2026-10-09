// Given an array of employees:
// const employees = [
//   { name: "Aman", salary: 45000, age: 25, department: "IT" },
//   { name: "Riya", salary: 65000, age: 28, department: "HR" },
//   { name: "Karan", salary: 55000, age: 24, department: "IT" },
//   { name: "Neha", salary: 75000, age: 30, department: "Finance" }
// ];Write a function analyzeEmployees(employees) that returns an object containing:
// highestPaid — name of the employee with the highest salary
// averageSalary — average salary
// itEmployees — names of employees in the IT department
// youngestEmployee — name of the youngest employee
// totalEmployees — total number of employees

console.log("Q.1")
const employees = [
  { name: "Aman", salary: 45000, age: 25, department: "IT" },
  { name: "Riya", salary: 65000, age: 28, department: "HR" },
  { name: "Karan", salary: 55000, age: 24, department: "IT" },
  { name: "Neha", salary: 75000, age: 30, department: "Finance" }
]

function analyzeEmployees(employees)
{
    let highestPaid = "";
    let highestPaid1 = 0;
    let averageSalary = 0
    let itEmployees = []
    let youngestEmployee = ""
     let youngestEmployee1 = Infinity
    let totalEmployees = 0

    for(let item of employees)
    {
        if(item.salary>highestPaid1)
        {
            highestPaid = item.name
        }
        if(item.department=="IT"){
            itEmployees.push(item.name)
        }
        if(item.age<youngestEmployee1)
        {
            youngestEmployee = item.name
        }
        totalEmployees = employees.length
        
        averageSalary += item.salary
    }

    return{
        highestPaid,averageSalary,itEmployees,youngestEmployee,totalEmployees
    }

}
console.log(analyzeEmployees(employees))

// 2. Product Inventory Analyzer
// const products = [
//   { name: "Laptop", price: 60000, stock: 5, category: "Electronics" },
//   { name: "Phone", price: 30000, stock: 0, category: "Electronics" },
//   { name: "Chair", price: 5000, stock: 12, category: "Furniture" },
//   { name: "Table", price: 10000, stock: 3, category: "Furniture" }
// ];Write analyzeProducts(products) that returns:

// mostExpensive — name of the most expensive product
// averagePrice — average product price
// outOfStock — names of products with zero stock
// availableProducts — names of products currently in stock
// totalProducts — total number of products

console.log("Q.2")

const products = [
  { name: "Laptop", price: 60000, stock: 5, category: "Electronics" },
  { name: "Phone", price: 30000, stock: 0, category: "Electronics" },
  { name: "Chair", price: 5000, stock: 12, category: "Furniture" },
  { name: "Table", price: 10000, stock: 3, category: "Furniture" }
]

function analyzeEmployees(employees)
{
    let mostExpensive = "";
    let mostExpensive1 = 0;
    let averagePrice = 0
    let a = 0;
    let outOfStock = []
    let availableProducts = []
    
    let totalProducts = 0

    for(let item of employees)
    {
        if(item.price>mostExpensive1)
        {
            mostExpensive = item.name
        }
        if(item.stock==0){
            outOfStock.push(item.name)
        }
        if(item.stock>=1)
        {
            availableProducts.push(item.name) 
        }
         totalProducts = employees.length
        
        a+= item.price
       
    }
    averagePrice = a /employees.length
    totalProducts = employees.length

    return{
       mostExpensive , outOfStock,availableProducts, averagePrice, totalProducts
    }

}
console.log(analyzeEmployees(products))


// 3. Movie Analyzer
// const movies = [
//   { title: "Inception", rating: 8.8, year: 2010, genre: "Sci-Fi" },
//   { title: "Avatar", rating: 7.8, year: 2009, genre: "Sci-Fi" },
//   { title: "Titanic", rating: 7.9, year: 1997, genre: "Romance" },
//   { title: "Interstellar", rating: 8.7, year: 2014, genre: "Sci-Fi" }
// ];Write analyzeMovies(movies) that returns:

// highestRated — title of the highest-rated movie
// averageRating — average rating
// sciFiMovies — titles of all Sci-Fi movies
// recentMovies — titles of movies released after 2010
// totalMovies — total number of movies


// 4. Shopping Cart Analyzer
// const cart = [
//   { name: "Laptop", price: 60000, quantity: 1 },
//   { name: "Mouse", price: 1000, quantity: 2 },
//   { name: "Keyboard", price: 2000, quantity: 1 },
//   { name: "Monitor", price: 15000, quantity: 2 }
// ];Write analyzeCart(cart) that returns:

// totalItems — total number of physical items
// totalCost — total cost of the cart
// mostExpensiveItem — name of the item with the highest individual price
// bulkItems — names of products whose quantity is greater than 1
// uniqueProducts — number of different products in the cart


// 5. Student Result Analyzer
// const students = [
//   { name: "Aman", marks: 85, age: 20 },
//   { name: "Riya", marks: 92, age: 19 },
//   { name: "Karan", marks: 45, age: 21 },
//   { name: "Neha", marks: 78, age: 20 },
//   { name: "Rohit", marks: 32, age: 22 }
// ];Write analyzeResults(students) that returns:

// topper — name of the student with the highest marks
// averageMarks — average marks
// passed — names of students who scored 40 or above
// failed — names of students who scored below 40
// highestScorerMarks — marks obtained by the topper


// 6. Order Analyzer
// const orders = [
//   { id: 101, customer: "Aman", amount: 2500, status: "delivered" },
//   { id: 102, customer: "Riya", amount: 4500, status: "pending" },
//   { id: 103, customer: "Karan", amount: 1200, status: "delivered" },
//   { id: 104, customer: "Neha", amount: 7000, status: "cancelled" }
// ];Write analyzeOrders(orders) that returns:

// totalRevenue — total amount of all delivered orders
// largestOrder — customer who placed the largest order
// deliveredOrders — IDs of delivered orders
// pendingOrders — IDs of pending orders
// cancelledOrders — IDs of cancelled orders


// 7. Player Statistics Analyzer
// const players = [
//   { name: "Virat", runs: 1200, matches: 20, age: 34 },
//   { name: "Rohit", runs: 1000, matches: 18, age: 36 },
//   { name: "Gill", runs: 1400, matches: 22, age: 24 },
//   { name: "Pant", runs: 800, matches: 15, age: 26 }
// ];Write analyzePlayers(players) that returns:

// topScorer — name of the player with the most runs
// totalRuns — total runs scored by all players
// averageRuns — average runs per player
// youngPlayers — names of players below 30
// bestAverage — player with the highest runs-per-match average


// 8. Bank Account Analyzer
// const accounts = [
//   { name: "Aman", balance: 50000, type: "savings" },
//   { name: "Riya", balance: 120000, type: "current" },
//   { name: "Karan", balance: 30000, type: "savings" },
//   { name: "Neha", balance: 80000, type: "savings" }
// ];Write analyzeAccounts(accounts) that returns:

// richestCustomer — name of the customer with the highest balance
// totalBalance — total money across all accounts
// averageBalance — average account balance
// savingsCustomers — names of customers with savings accounts
// highBalanceCustomers — names of customers with a balance above 70000


// 9. E-Commerce Customer Analyzer
// const customers = [
//   { name: "Aman", orders: 5, spent: 12000, city: "Delhi" },
//   { name: "Riya", orders: 8, spent: 25000, city: "Mumbai" },
//   { name: "Karan", orders: 2, spent: 5000, city: "Delhi" },
//   { name: "Neha", orders: 10, spent: 30000, city: "Bangalore" }
// ];Write analyzeCustomers(customers) that returns:

// topCustomer — customer who spent the most money
// totalSpent — total amount spent by all customers
// averageSpent — average spending
// delhiCustomers — names of customers from Delhi
// loyalCustomers — names of customers who placed at least 5 orders


// 10. Social Media Post Analyzer
// const posts = [
//   { id: 1, author: "Aman", likes: 120, comments: 20, shares: 10 },
//   { id: 2, author: "Riya", likes: 500, comments: 80, shares: 50 },
//   { id: 3, author: "Karan", likes: 250, comments: 40, shares: 30 },
//   { id: 4, author: "Neha", likes: 80, comments: 10, shares: 5 }
// ];Write analyzePosts(posts) that returns:

// mostLikedPost — author of the post with the most likes
// totalLikes — total likes across all posts
// totalComments — total comments across all posts
// popularPosts — IDs of posts having more than 200 likes
// mostEngagingPost — author of the post with the highest total engagement
// Where:
// // total engagement = likes + comments + shares