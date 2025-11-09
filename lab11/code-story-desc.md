# IST 263
## Code Chain Story - Group Activity**

**Time:** 15 minutes  
**Group Size:** 4 students  
**Goal:** Build an interactive story using variables, comparison operators, and if/else statements

---

## How It Works

Each person in your group will take turns adding to your code. Use the HTML template provided by your instructor.

### Person 1: Set the Scene (3 minutes)
- Declare 2-3 variables that matter to your story
- Give them starting values
- Use `console.log()` to introduce the story

**Example:**
```javascript
let health = 100;
let hasKey = false;
let gold = 50;
console.log("You wake up in a dark dungeon...");
```

### Person 2: First Decision (3 minutes)
- Write an if/else statement that checks ONE variable
- Use a comparison operator: `>`, `<`, `>=`, `<=`, `===`, `!==`
- Show what happens with `console.log()`

**Example:**
```javascript
if (gold >= 30) {
    console.log("You bought a healing potion!");
    gold = gold - 30;
    health = health + 25;
} else {
    console.log("Not enough gold for a potion.");
}
```

### Person 3: Second Decision (3 minutes)
- Write another if/else statement
- Check a DIFFERENT variable or condition
- Use `console.log()` to show the result

**Example:**
```javascript
if (hasKey === true) {
    console.log("You unlocked the door!");
} else {
    console.log("The door is locked. You need a key.");
    health = health - 10;
}
```

### Person 4: The Ending (3 minutes)
- Write a final if/else statement
- Try to check MULTIPLE variables (using `&&` or `||`)
- Give your story an ending with `console.log()`

**Example:**
```javascript
if (health > 50 && hasKey === true) {
    console.log("You escaped the dungeon! Victory!");
} else if (health <= 0) {
    console.log("You collapsed. Game over.");
} else {
    console.log("You're trapped forever...");
}
```

---

## Story Prompts (Choose One)

### 🏰 Prompt 1: Dungeon Escape
You're trapped in a dungeon and need to escape!

**Suggested Variables:**
- `health` - Your health points (start: 100)
- `hasKey` - Do you have the key? (start: false)
- `gold` - How much money you have (start: 50)

**Story Ideas:**
- Buy items from a merchant
- Fight enemies (lose health)
- Find the key in a treasure chest
- Check if you can escape at the end

---

### 🛍️ Prompt 2: Shopping Spree
You're at the mall with a budget. Can you get what you want?

**Suggested Variables:**
- `budget` - Money you can spend (start: 100)
- `itemsBought` - Number of items purchased (start: 0)
- `hasDiscount` - Do you have a coupon? (start: false)

**Story Ideas:**
- Items have different prices
- Get a discount if you spend enough
- Limited budget - make choices!
- Check if you can still shop at the end

---

### 🎮 Prompt 3: Video Game Boss Battle
You're fighting the final boss!

**Suggested Variables:**
- `playerHealth` - Your health (start: 100)
- `bossHealth` - Boss health (start: 150)
- `hasPowerUp` - Special power available? (start: true)

**Story Ideas:**
- Attack the boss (reduce boss health)
- Boss attacks back (reduce your health)
- Use power-up for extra damage
- Win if boss health reaches 0, lose if your health reaches 0

---

## Tips for Success

✅ **DO:**
- Use `console.log()` to display messages
- Test your code after each person adds their part
- Use descriptive variable names
- Have fun and be creative!

❌ **DON'T:**
- Skip your turn - everyone must contribute
- Forget semicolons `;`
- Use `=` when you mean `===`
- Forget curly braces `{}` for if/else blocks

---

## Syntax Reminders

**Declare a variable:**
```javascript
let variableName = value;
```

**Display a message:**
```javascript
console.log("Your message here");
```

**If/Else statement:**
```javascript
if (condition) {
    // code if true
} else {
    // code if false
}
```

**Comparison Operators:**
- `===` equal to
- `!==` not equal to
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to

**Logical Operators:**
- `&&` AND (both conditions must be true)
- `||` OR (at least one condition must be true)

---

**When finished:** Click the "Run Code" button to see your story! Be ready to share with the class.