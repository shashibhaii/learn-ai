"use client";

import { InteractiveCodeBlock } from "@/components/docs/InteractiveCodeBlock";
import { Button } from "@/components/ui/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DataCollectionPage() {
    return (
        <div className="prose prose-invert max-w-none">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-white mb-6"
            >
                Data Collection
            </motion.h1>

            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Data is the fuel for AI models. Before you can train any model, you need quality data. Here's how to collect it from various sources.
            </p>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border-l-4 border-neon-blue p-6 mb-8 rounded-r-xl">
                <p className="text-gray-300 m-0">
                    <strong className="text-neon-blue">Remember:</strong> Garbage in, garbage out. The quality of your data determines the quality of your model.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Data Sources</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                    { icon: "🌐", title: "APIs", desc: "Structured data from web services", color: "blue" },
                    { icon: "🗄️", title: "Databases", desc: "SQL/NoSQL data stores", color: "green" },
                    { icon: "🕷️", title: "Web Scraping", desc: "Extract data from websites", color: "purple" },
                ].map((source, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`glass-panel p-6 rounded-xl border-l-4 border-${source.color}-500`}
                    >
                        <div className="text-4xl mb-3">{source.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{source.title}</h3>
                        <p className="text-sm text-gray-400">{source.desc}</p>
                    </motion.div>
                ))}
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">1. Using APIs</h2>
            <p className="text-gray-400 mb-4">
                APIs (Application Programming Interfaces) provide structured access to data. Most modern services offer REST APIs.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import requests

# Example: Fetch weather data from API
url = "https://api.openweathermap.org/data/2.5/weather"
params = {
    "q": "London",
    "appid": "your_api_key",
    "units": "metric"
}

# Make API request
response = requests.get(url, params=params)

# Check if successful
if response.status_code == 200:
    data = response.json()
    print(f"Temperature in London: {data['main']['temp']}°C")
    print(f"Weather: {data['weather'][0]['description']}")
else:
    print(f"Error: {response.status_code}")`}
                expectedOutput={`Temperature in London: 15.2°C
Weather: partly cloudy`}
            />

            <div className="bg-black/40 p-6 rounded-xl border border-white/10 my-8">
                <h4 className="text-lg font-bold text-white mb-3">Popular Data APIs</h4>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                    <div>• Twitter API (social data)</div>
                    <div>• Google Maps API (location)</div>
                    <div>• OpenWeather API (weather)</div>
                    <div>• Alpha Vantage (finance)</div>
                    <div>• News API (articles)</div>
                    <div>• Spotify API (music)</div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">2. Database Access</h2>
            <p className="text-gray-400 mb-4">
                Connect to SQL or NoSQL databases to extract data for analysis.
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`import pandas as pd
import sqlite3

# Connect to SQLite database
conn = sqlite3.connect('sales.db')

# Query data using SQL
query = """
SELECT product, SUM(quantity) as total_sold
FROM sales
WHERE date >= '2024-01-01'
GROUP BY product
ORDER BY total_sold DESC
LIMIT 5
"""

# Load into pandas DataFrame
df = pd.read_sql_query(query, conn)

print("Top 5 Products:")
print(df)

conn.close()`}
                expectedOutput={`Top 5 Products:
       product  total_sold
0       Laptop        1250
1   Smartphone         980
2      Headset         750
3      Monitor         620
4     Keyboard         580`}
            />

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">3. Web Scraping</h2>
            <p className="text-gray-400 mb-4">
                Extract data from websites when no API is available. Always check robots.txt and terms of service!
            </p>

            <InteractiveCodeBlock
                language="python"
                initialCode={`from bs4 import BeautifulSoup
import requests

# Fetch webpage
url = "https://example.com/products"
response = requests.get(url)

# Parse HTML
soup = BeautifulSoup(response.content, 'html.parser')

# Extract product names and prices
products = []
for item in soup.find_all('div', class_='product'):
    name = item.find('h3').text.strip()
    price = item.find('span', class_='price').text.strip()
    products.append({'name': name, 'price': price})

print(f"Found {len(products)} products:")
for p in products[:3]:
    print(f"  {p['name']}: {p['price']}")`}
                expectedOutput={`Found 15 products:
  Wireless Mouse: $29.99
  USB-C Cable: $12.99
  Laptop Stand: $49.99`}
            />

            <div className="bg-white/5 border-l-4 border-yellow-500 p-6 my-8 rounded-r-xl">
                <p className="text-gray-300 m-0 text-sm">
                    <strong className="text-yellow-400">⚠️ Legal Note:</strong> Always respect robots.txt, rate limits, and terms of service. Some websites prohibit scraping. Use APIs when available.
                </p>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Data Formats</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-blue mb-3">CSV</h3>
                    <p className="text-sm text-gray-400 mb-3">Comma-separated values. Simple and widely used.</p>
                    <div className="bg-black/40 p-3 rounded text-xs font-mono text-gray-300">
                        name,age,city<br />
                        Alice,25,NYC<br />
                        Bob,30,LA
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-neon-purple mb-3">JSON</h3>
                    <p className="text-sm text-gray-400 mb-3">JavaScript Object Notation. Hierarchical data.</p>
                    <div className="bg-black/40 p-3 rounded text-xs font-mono text-gray-300">
                        {`{"name": "Alice",`}<br />
                        {` "age": 25,`}<br />
                        {` "city": "NYC"}`}
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-lg font-bold text-green-400 mb-3">XML</h3>
                    <p className="text-sm text-gray-400 mb-3">Extensible Markup Language. Structured documents.</p>
                    <div className="bg-black/40 p-3 rounded text-xs font-mono text-gray-300">
                        {`<person>`}<br />
                        {`  <name>Alice</name>`}<br />
                        {`  <age>25</age>`}<br />
                        {`</person>`}
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Best Practices</h2>

            <div className="space-y-3 mb-8">
                {[
                    { icon: "✓", text: "Document your data sources and collection methods", color: "green" },
                    { icon: "✓", text: "Implement error handling and retry logic", color: "green" },
                    { icon: "✓", text: "Respect rate limits to avoid being blocked", color: "green" },
                    { icon: "✓", text: "Store raw data before processing", color: "green" },
                    { icon: "✓", text: "Add timestamps to track when data was collected", color: "green" },
                    { icon: "✓", text: "Validate data quality during collection", color: "green" },
                ].map((practice, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass-panel p-4 rounded-lg flex items-center gap-3"
                    >
                        <span className={`text-${practice.color}-400 text-xl`}>{practice.icon}</span>
                        <span className="text-gray-300">{practice.text}</span>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
                <Link href="/docs/pandas-dataframes">
                    <Button variant="ghost" className="gap-2">
                        <ChevronLeft className="w-4 h-4" /> Previous
                    </Button>
                </Link>
                <Link href="/docs/data-cleaning">
                    <Button className="gap-2">
                        Next: Data Cleaning <ChevronRight className="w-4 h-4" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
