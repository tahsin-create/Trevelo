// =================================================================
//                      GLOBAL DATA & VARIABLES
// =================================================================
const products = [
    { 
        id: 1, 
        name: "Huawei HG8010H EPON ONU", 
        price: 850, 
        originalPrice: 1000, 
        category: "Networking", 
        images: [
            "https://i.ibb.co/JJXCYq4/Huawei-2.png",
            "https://i.ibb.co/ynK10NRb/616043c722190e0b30ee29f051eddd4c.png",
            "https://i.ibb.co/21nhXWYC/xpon-onu-huawei-1-pcs-1-port-2024-01-30-05-20-17-65b832b165c36.jpg"
        ], 
        stock: 5,
        brand: "HUAWEI",
        productModel: "HG8010H",
        warranty: "1 Year",
        features: ["Energy-efficient with only 2.5W.","Portable at 500g.","AC 110-240V compatibility.","Reliable, fast internet."],
        specification: {"General": { "Power": "2.5W", "Weight": "500g" },"Switch": { "Power Input": "AC 110-240V" }},
        description: "The Huawei HG8010H EPON ONU is an excellent choice for deploying high-speed fiber-optic networks."
    },
    { 
        id: 2, 
        name: "Netac Basic 4GB DDR4 2666MHZ Desktop RAM", 
        price: 900, 
        originalPrice: 1300, 
        category: "pc", 
        images: ["https://www.computervillage.com.bd/image/cache/catalog/Netac/netac-basic-4gb-ddr4-2666mhz-desktop-ram-1-550x350h.jpg","https://netacbd.com/wp-content/uploads/2022/11/ddr4.png"], 
        stock: 5,
        brand: "Netac",
        productModel: "Basic",
        warranty: "No Warranty",
        features: ["2666MHZ", "LED Indicator", "Compact Design"],
        specification: {"Capacity": { "Battery": "10000mAh", "Type": "Lithium Polymer" },"Ports": { "Input": "Micro USB", "Output": "2 x USB-A" }},
        description: "A complete DIY kit to build your own 10000mAh power bank. Easy to assemble and great for learning.",

        
    },
    { id: 3, name: "Tenda F3 N300 Router", price: 1200, originalPrice: 1400, category: "networking", images: ["https://cdn.bdstall.com/product-image/giant_313457.jpeg","https://5.imimg.com/data5/SELLER/Default/2023/10/350316413/PY/WY/IP/196215351/tenda-f3-300-mbps-wifi-router-500x500.jpg"], stock: 10, brand: "Tenda", productModel: "F3 N300", warranty: "1 Year", features: ["300Mbps wireless speed", "Three 5dBi external antennas", "Easy setup"], specification: { "Wireless": { "Speed": "300Mbps", "Antennas": "3" } }, description: "The Tenda F3 is a stable and reliable N300 router, perfect for small to medium-sized homes." },
    { id: 4, name: "TWS M10 Bluetooth Earbuds", price: 850, originalPrice: 1200, category: "tws", images: ["https://cdn.shopz.com.bd/2021/03/M10-TWS-Wireless-Earbuds.jpg","https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/M10_TWS_Wireless_Earbud_Bluetooth_51-Non_Brand-383c5-480399.jpg"], stock: 5, brand: "Generic", productModel: "M10", warranty: "7 Days Replacement", features: ["Bluetooth 5.1", "IPX7 Waterproof", "2000mAh Charging Case"], specification: { "Audio": { "Bluetooth": "5.1", "Playtime": "4-5 Hours" } }, description: "High-fidelity TWS earbuds with a large capacity charging case that also functions as an emergency power bank." },
    { id: 5, name: "12V 2A Power Adapter", price: 280, originalPrice: 350, category: "adapter", images: ["https://www.bdtronics.com/pub/media/catalog/product/h/c/hcbf96fd10c074b3a82b85ae91bc4736ew_1.jpg"], stock: 6, brand: "OEM", productModel: "12V2A", warranty: "No Warranty", features: ["Stable 12V Output", "Overload Protection"], specification: { "Output": { "Voltage": "12V DC", "Current": "2A" } }, description: "A reliable power adapter for CCTV, LED strips, and other 12V devices." },
    { id: 6, name: "775 DC Motor High Speed", price: 650, originalPrice: 800, category: "motor", images: ["https://static-01.daraz.com.bd/p/97ca5c1be259653f8c74528450020e3b.jpg"], stock: 7, brand: "Generic", productModel: "775", warranty: "No Warranty", features: ["High Torque", "Ball Bearing", "12000 RPM @ 12V"], specification: { "Performance": { "Voltage": "12V-24V", "Speed": "12000 RPM" } }, description: "A powerful 775 DC motor for DIY drills, table saws, and robotics." },
    { id: 7, name: "60W Adjustable Soldering Iron Kit", price: 950, originalPrice: 1100, category: "soldering", images: ["https://udvabony.com/wp-content/uploads/2019/12/Electric-Soldering-Iron-V-802-60W-250V-6A-Lightweight-Soldering-Iron-For-Hot-Iron-Welding-Electronic-Circuit-Melt-Iron-Rework-Repair-Tool-DIY-1-scaled.jpg"], stock: 8, brand: "Pro'sKit", productModel: "SK-60W", warranty: "No Warranty", features: ["Adjustable Temperature (200-450°C)", "Includes 5 tips"], specification: { "Power": { "Rating": "60W", "Voltage": "220V" } }, description: "A complete soldering kit for electronics repair and DIY projects." },
    { id: 8, name: "18650 Li-Ion Battery 2200mAh", price: 220, originalPrice: 280, category: "battery", images: ["https://www.winpowhub.com/uploads/202117235/18650-lithium-battery-3-7-v-2200mah56052016984.jpg"], stock: 50, brand: "Samsung", productModel: "ICR18650-22F", warranty: "No Warranty", features: ["Rechargeable", "High Capacity"], specification: { "Capacity": { "mAh": "2200", "Voltage": "3.7V" } }, description: "A standard 18650 rechargeable battery for flashlights and power banks." },
    { id: 9, name: "Plextone EX2 Pro RGB Magnetic Radiator Phone Cooler", price: 1200, originalPrice: 1600, category: "fan", images: ["https://cdn.shopz.com.bd/2024/03/Plextone-EX2-Pro-RGB-Magnetic-Radiator-Phone-Cooler-1.jpg"], stock: 3, brand: "CoolerMaster", productModel: "CM-8025", warranty: "6 Months", features: ["Low Noise", "Sleeve Bearing"], specification: { "Specs": { "Size": "80mm", "Voltage": "12V DC" } }, description: "An 80mm brushless DC fan for cooling computer cases and electronics." },
    { id: 10, name: "Bluetooth 5.0 Audio Receiver Module", price: 350, category: "tws", images: ["https://static-01.daraz.com.bd/p/07fbde94baed4bfcbd0dcba82438d6d4.jpg"], stock: 4, brand: "Generic", productModel: "XY-WRBT", warranty: "7 Days Replacement", features: ["Stereo Output", "Supports WAV/APE/FLAC/MP3"], specification: { "Audio": { "Bluetooth": "5.0", "Power": "3.7V-5V" } }, description: "Easily add Bluetooth audio to your old speakers or car stereo." },
    { id: 11, name: "SG90 Micro Servo Motor", price: 150, originalPrice: 200, category: "motor", images: ["https://via.placeholder.com/500x500.png?text=SG90+Servo"], stock: 60, brand: "Tower Pro", productModel: "SG90", warranty: "No Warranty", features: ["Lightweight (9g)", "180 Degree Rotation"], specification: { "Performance": { "Torque": "1.8 kg/cm", "Voltage": "4.8V" } }, description: "A popular micro servo motor for robotics and RC projects." },
    { id: 12, name: "Solder Lead (60/40) 50g", price: 120, category: "soldering", images: ["https://via.placeholder.com/500x500.png?text=Solder+Wire"], stock: 100, brand: "Mechanic", productModel: "60/40-50g", warranty: "No Warranty", features: ["Rosin Core", "0.8mm Diameter"], specification: { "Composition": { "Tin": "60%", "Lead": "40%" } }, description: "High-quality 60/40 rosin core solder wire for general purpose electronics." },
    { id: 13, name: "JST-XH 2-Pin Connector Set", price: 15, category: "connector", images: ["https://via.placeholder.com/500x500.png?text=JST+Connector"], stock: 200, brand: "Generic", productModel: "JST-XH-2P", warranty: "No Warranty", features: ["2.54mm Pitch", "Male & Female Pair"], specification: { "Details": { "Pins": "2", "Type": "JST-XH" } }, description: "A set of JST-XH 2-pin connectors for batteries and components." },
    { id: 14, name: "18650 2-Cell Battery Holder", price: 40, category: "battery", images: ["https://via.placeholder.com/500x500.png?text=Battery+Holder"], stock: 80, brand: "Generic", productModel: "BH-18650-2S", warranty: "No Warranty", features: ["Series Connection (7.4V)", "With Wire Leads"], specification: { "Capacity": { "Cells": "2 x 18650", "Output": "7.4V" } }, description: "A durable holder for two 18650 batteries, wired in series." },
    { id: 15, name: "DC-DC Buck Converter LM2596", price: 90, originalPrice: 120, category: "adapter", images: ["https://via.placeholder.com/500x500.png?text=Buck+Converter"], stock: 45, brand: "Generic", productModel: "LM2596", warranty: "7 Days Replacement", features: ["Adjustable Output", "High Efficiency"], specification: { "Power": { "Input": "4V-35V", "Output": "1.23V-30V" } }, description: "An adjustable step-down (buck) converter module for various projects." },
    { id: 16, name: "10-inch Drone Propeller (Pair)", price: 160, category: "motor", images: ["https://via.placeholder.com/500x500.png?text=Propeller"], stock: 90, brand: "Generic", productModel: "1045", warranty: "No Warranty", features: ["Durable Nylon Fiber", "Includes CW & CCW"], specification: { "Size": { "Length": "10 inch", "Pitch": "4.5 inch" } }, description: "A pair of 10-inch propellers for quadcopters and drones." },
    { id: 17, name: "Soldering Flux Paste (10g)", price: 50, category: "soldering", images: ["https://via.placeholder.com/500x500.png?text=Flux+Paste"], stock: 120, brand: "Kingbo", productModel: "RMA-218", warranty: "No Warranty", features: ["Improves Solder Flow", "Prevents Bridges"], specification: { "Details": { "Weight": "10g", "Type": "Paste" } }, description: "High-quality soldering flux paste for clean, professional solder joints." },
    { id: 18, name: "Dupont Jumper Wire Set (40 pcs)", price: 150, category: "connector", images: ["https://via.placeholder.com/500x500.png?text=Jumper+Wires"], stock: 35, brand: "Generic", productModel: "M-F-20cm", warranty: "No Warranty", features: ["Male-to-Female", "20cm Length", "Multicolor"], specification: { "Quantity": { "Pieces": "40", "Type": "M-F" } }, description: "A set of 40 male-to-female jumper wires for breadboarding." },
    { id: 19, name: "TP4056 Li-Ion Charger Module", price: 45, originalPrice: 60, category: "battery", images: ["https://via.placeholder.com/500x500.png?text=TP4056+Module"], stock: 70, brand: "Generic", productModel: "TP4056", warranty: "7 Days Replacement", features: ["Micro USB Input", "Built-in Protection"], specification: { "Charging": { "Current": "1A", "Input": "5V" } }, description: "A compact and efficient single-cell lithium battery charger module." },
    { id: 20, name: "Wireless Neckband Earphones", price: 650, originalPrice: 900, category: "tws", images: ["https://via.placeholder.com/500x500.png?text=Neckband"], stock: 18, brand: "UiiSii", productModel: "BN29", warranty: "3 Months", features: ["Magnetic Earbuds", "10-Hour Playtime", "Sweatproof"], specification: { "Audio": { "Bluetooth": "5.0", "Playtime": "8-10 Hours" } }, description: "Comfortable wireless neckband earphones for daily use and sports." },
    { id: 21, name: "Netac Basic DDR3 4GB 1600MHZ Desktop RAM", price: 650, originalPrice: 900, category: "pc", images: ["https://netacbd.com/wp-content/uploads/2022/11/3859d196-6514-4255-bc34-01f7e9c141a8.jpg_ixaf.jpg"], stock: 18, brand: "UiiSii", productModel: "BN29", warranty: "3 Months", features: ["Magnetic Earbuds", "10-Hour Playtime", "Sweatproof"], specification: { "Audio": { "Bluetooth": "5.0", "Playtime": "8-10 Hours" } }, description: "Comfortable wireless neckband earphones for daily use and sports." },
  {
    "id": 22,
    "name": "A4Tech KR-98 Ultra-Slim USB Keyboard",
    "price": 600,
    "originalPrice": 799,
    "category": "pc",
    "images": ["https://www.bdstall.com/asset/product-image/giant_94229.jpg"],
    "stock": 25,
    "brand": "A4Tech",
    "productModel": "KR-98",
    "warranty": "1 Year",
    "features": ["Ultra-slim design", "Comfortable typing", "Durable build"],
    "specification": { "Connectivity": "USB", "Layout": "Standard English + Bengali" },
    "description": "தினசரி ব্যবহারের জন্য একটি স্লিম এবং স্টাইলিশ কিবোর্ড।"
  },
  {
    "id": 23,
    "name": "Logitech M90 USB Mouse",
    "price": 350,
    "originalPrice": 500,
    "category": "pc",
    "images": ["https://www.startech.com.bd/image/cache/catalog/mouse/logitech/m90/m90-500x500.jpg"],
    "stock": 40,
    "brand": "Logitech",
    "productModel": "M90",
    "warranty": "1 Year",
    "features": ["Ambidextrous design", "1000 DPI sensor", "Plug and play"],
    "specification": { "Sensor": "Optical", "Resolution": "1000 DPI", "Connection": "Wired USB" },
    "description": "অফিস এবং বাসার সাধারণ কাজের জন্য নির্ভরযোগ্য একটি মাউস।"
  },
  {
    "id": 24,
    "name": "Team Elite Plus 4GB DDR3 1600MHz RAM",
    "price": 850,
    "originalPrice": 1100,
    "category": "pc",
    "images": ["https://www.techlandbd.com/image/cache/wp/gp/RAM/Team/Desktop-ram/team-elite-plus-4gb-ddr3-1600mhz-ram-black-gold-2-500x500.webp"],
    "stock": 15,
    "brand": "Team",
    "productModel": "TPP34G1600HC1101",
    "warranty": "Life Time",
    "features": ["High performance", "Stable and reliable", "Low power consumption"],
    "specification": { "Memory Type": "DDR3", "Capacity": "4GB", "Bus Speed": "1600MHz" },
    "description": "আপনার ডেস্কটপ পিসির গতি বাড়ানোর জন্য একটি চমৎকার র‍্যাম।"
  },
  {
    "id": 25,
    "name": "HP K1600 Wired USB Keyboard",
    "price": 550,
    "originalPrice": 680,
    "category": "pc",
    "images": ["https://www.bdstall.com/asset/product-image/giant_155681.jpg"],
    "stock": 30,
    "brand": "HP",
    "productModel": "K1600",
    "warranty": "6 Months",
    "features": ["Standard layout", "Spill-resistant design", "Quiet keys"],
    "specification": { "Connection": "USB Wired", "Keys": "104", "Language": "English" },
    "description": "এইচপি ব্র্যান্ডের মজবুত এবং টেকসই একটি কিবোর্ড। [8]"
  },
  {
    "id": 26,
    "name": "Walton WMS022WN Wired Optical Mouse",
    "price": 280,
    "originalPrice": 400,
    "category": "pc",
    "images": ["https://waltonbd.com/image/catalog/walton-computer-accessories/mouse/wms022wn/wms022wn-p-1.jpg"],
    "stock": 50,
    "brand": "Walton",
    "productModel": "WMS022WN",
    "warranty": "6 Months",
    "features": ["Ergonomic design", "High-precision optical sensor", "Durable clicks"],
    "specification": { "Interface": "USB", "DPI": "1000", "Cable Length": "1.5m" },
    "description": "সাশ্রয়ী মূল্যে দৈনন্দিন ব্যবহারের জন্য ওয়ালটনের একটি নির্ভরযোগ্য মাউস। [4]"
  },
  {
    "id": 27,
    "name": "Value-Top VT-R828 Casing Without Power Supply",
    "price": 950,
    "originalPrice": 1200,
    "category": "pc",
    "images": ["https://www.binarylogic.com.bd/images/thumbnails/700/700/detailed/25/Value-Top-VT-R828-Micro-ATX-Casing-1.jpg"],
    "stock": 12,
    "brand": "Value-Top",
    "productModel": "VT-R828",
    "warranty": "No Warranty",
    "features": ["Micro-ATX supported", "Good ventilation", "Compact design"],
    "specification": { "Case Type": "Micro ATX", "Front Panel": "USB, Audio", "Cooling Fan": "1 x 80mm (built-in)" },
    "description": "কম বাজেটের মধ্যে একটি সাধারণ মানের পিসি কেসিং।"
  },
  {
    "id": 28,
    "name": "Jedel KB-1000 Wired Mini Keyboard",
    "price": 430,
    "originalPrice": 599,
    "category": "pc",
    "images": ["https://www.bdstall.com/asset/product-image/giant_155680.jpg"],
    "stock": 22,
    "brand": "Jedel",
    "productModel": "KB-1000",
    "warranty": "3 Months",
    "features": ["Compact size", "Easy to carry", "Plug and play"],
    "specification": { "Connectivity": "USB", "Size": "Mini", "Keys": "78" },
    "description": "ছোট আকারের এবং সহজে বহনযোগ্য একটি মিনি কিবোর্ড। [8]"
  },
  {
    "id": 29,
    "name": "HP M100 Gaming Mouse",
    "price": 450,
    "originalPrice": 600,
    "category": "pc",
    "images": ["https://www.daraz.com.bd/products/hp-m100-usb-wired-gaming-optical-mouse-with-led-backlight-and-adjustable-10001600-dpi-settings-3-buttons-for-gaming-gamers-i101036066.html"],
    "stock": 35,
    "brand": "HP",
    "productModel": "M100",
    "warranty": "1 Year",
    "features": ["LED Backlight", "Adjustable DPI (1000/1600)", "Ergonomic for gaming"],
    "specification": { "Sensor": "Optical", "Buttons": "3", "Connection": "USB" },
    "description": "বাজেট গেমারদের জন্য এলইডি ব্যাকলাইট সহ একটি চমৎকার গেমিং মাউস। [11]"
  },
  {
    "id": 30,
    "name": "Adata 4GB DDR3 1600MHz Laptop RAM",
    "price": 900,
    "originalPrice": 1250,
    "category": "pc",
    "images": ["https://www.startech.com.bd/image/cache/catalog/ram/adata/4gb-ddr3-1600mhz/4gb-ddr3-1600mhz-500x500.jpg"],
    "stock": 16,
    "brand": "Adata",
    "productModel": "ADDS1600C4G11-S",
    "warranty": "Life Time",
    "features": ["For Laptops", "Energy efficient", "High quality"],
    "specification": { "Memory Type": "DDR3", "Capacity": "4GB", "Bus Speed": "1600MHz", "Pin": "204-Pin" },
    "description": "আপনার ল্যাপটপের পারফরম্যান্স বাড়ানোর জন্য একটি নির্ভরযোগ্য র‍্যাম।"
  },
  {
    "id": 31,
    "name": "Havit HV-KB390L USB Keyboard",
    "price": 750,
    "originalPrice": 950,
    "category": "pc",
    "images": ["https://www.havit.com.bd/wp-content/uploads/2020/09/HV-KB390L-3.jpg"],
    "stock": 28,
    "brand": "Havit",
    "productModel": "HV-KB390L",
    "warranty": "1 Year",
    "features": ["Backlit keys", "Standard layout", "Durable"],
    "specification": { "Interface": "USB", "Cable length": "1.5m", "Backlight": "Yes" },
    "description": "রাতে কাজ করার সুবিধার জন্য ব্যাকলিটসহ একটি স্টাইলিশ কিবোর্ড।"
  },
  // Second Line NetWorking//
  {
"id": 32,
"name": "TP-Link Archer C24 AC750 Dual-Band WiFi Router",
"price": 2090,
"originalPrice": 2400,
"category": "Networking",
"images": ["https://www.startech.com.bd/image/cache/catalog/router/tp-link/archer-c24/archer-c24-01-500x500.jpg"],
"stock": 30,
"brand": "TP-Link",
"productModel": "Archer C24",
"warranty": "1 Year",
"features": ["750Mbps Dual-Band Wi-Fi", "4 Fixed Antennas", "Access Point & Range Extender Mode"],
"specification": { "WiFi Speed": "433Mbps (5GHz) + 300Mbps (2.4GHz)", "Ports": "1 WAN, 4 LAN (10/100 Mbps)", "Coverage": "Up to 1200 sq. ft." },
"description": "বাসা এবং ছোট অফিসের জন্য একটি নির্ভরযোগ্য ডুয়াল-ব্যান্ড রাউটার যা স্থিতিশীল এবং দ্রুত গতির ইন্টারনেট সংযোগ নিশ্চিত করে।"
},
{
"id": 33,
"name": "Tenda F6 N300 Wireless Router",
"price": 1590,
"originalPrice": 1800,
"category": "Networking",
"images": ["https://www.ryanscomputers.com/storage/products/medium/tenda-f6-n300-mbps-white-wi-fi-router-11608101413.webp"],
"stock": 45,
"brand": "Tenda",
"productModel": "F6",
"warranty": "1 Year",
"features": ["300Mbps Wireless Speed", "4 x 5dBi External Antennas", "Wi-Fi Repeater Function"],
"specification": { "Frequency": "2.4GHz", "Ports": "1 WAN, 3 LAN", "Standard": "IEEE802.11b/g/n" },
"description": "দৈনন্দিন ইন্টারনেট ব্রাউজিং, স্ট্রিমিং এবং অনলাইন ক্লাসের জন্য সাশ্রয়ী মূল্যের একটি চমৎকার রাউটার।"
},
{
"id": 34,
"name": "Huawei HG8010H EPON ONU",
"price": 750,
"originalPrice": 850,
"category": "Networking",
"images": ["https://www.independenttechbd.com/wp-content/uploads/2023/10/Huawei-HG8010H-EPON-ONU-price-in-Bangladesh.jpg"],
"stock": 50,
"brand": "Huawei",
"productModel": "HG8010H",
"warranty": "6 Months",
"features": ["Plug-and-play", "High-performance forwarding", "Energy efficient"],
"specification": { "Port": "1 GE Port", "Type": "EPON", "Power Consumption": "Low" },
"description": "ফাইবার অপটিক ইন্টারনেট ব্যবহারকারীদের জন্য একটি নির্ভরযোগ্য এবং বহুল ব্যবহৃত ONU।"
},
{
"id": 35,
"name": "Netis WF2409E 300Mbps Wireless N Router",
"price": 1550,
"originalPrice": 1850,
"category": "Networking",
"images": ["https://defaultsystembd.com/image/cache/catalog/product/Netis/WF2409E/netis-wf2409e-300mbps-wireless-n-router-500x500.jpg"],
"stock": 25,
"brand": "Netis",
"productModel": "WF2409E",
"warranty": "1 Year",
"features": ["300Mbps High Speed", "3 x 5dBi High Gain Antennas", "Multiple Wireless Modes (AP, Repeater, Client)"],
"specification": { "Frequency": "2.4-2.4835GHz", "Ports": "1 WAN, 4 LAN", "Antennas": "3" },
"description": "শক্তিশালী কভারেজ এবং একাধিক কানেকশন মোডসহ একটি উন্নত মানের রাউটার।"
},
{
"id": 36,
"name": "BDCOM GP1705-2G Dual Port WiFi XPON ONU",
"price": 3050,
"originalPrice": 3450,
"category": "Networking",
"images": ["https://www.startech.com.bd/image/cache/catalog/onu/bdcom/gp1705-2g/gp1705-2g-01-500x500.webp"],
"stock": 15,
"brand": "BDCOM",
"productModel": "GP1705-2G",
"warranty": "1 Year",
"features": ["Dual Band WiFi (1200Mbps)", "XPON (GPON/EPON) Support", "2 Gigabit LAN Ports"],
"specification": { "PON Rate": "Downlink 2.5Gbps / Uplink 1.25Gbps", "WiFi": "802.11ac", "Antennas": "4 x 2x2 MIMO" },
"description": "উচ্চ গতির ইন্টারনেট এবং বিল্ট-ইন ডুয়াল-ব্যান্ড ওয়াইফাই সুবিধাসহ একটি শক্তিশালী XPON ONU।"
},
{
"id": 37,
"name": "D-Link Cat-6 305 Meter Aluminum Network Cable",
"price": 3500,
"originalPrice": 4200,
"category": "Networking",
"images": ["https://www.bdstall.com/asset/product-image/giant_61352.jpg"],
"stock": 20,
"brand": "D-Link",
"productModel": "CCA-UTP-305M",
"warranty": "No Warranty",
"features": ["305 Meter Length", "4 Pairs Twisted CCA", "High-speed data transfer"],
"specification": { "Conductor": "0.50 mm (CCA)", "Jacket": "PVC", "Data Pass": "120-150 Meter" },
"description": "বাসা বা অফিসের নেটওয়ার্কিং এর জন্য সাশ্রয়ী মূল্যের একটি সম্পূর্ণ বক্স CAT6 ক্যাবল।"
},
{
"id": 38,
"name": "Tenda AC5 AC1200 Smart Dual-Band WiFi Router",
"price": 2050,
"originalPrice": 2350,
"category": "Networking",
"images": ["https://www.ryanscomputers.com/storage/products/medium/tenda-ac5-ac1200-smart-dual-band-wi-fi-router-11579737150.webp"],
"stock": 33,
"brand": "Tenda",
"productModel": "AC5",
"warranty": "1 Year",
"features": ["1200Mbps Dual-Band", "4 x 6dBi High-Gain Antennas", "Beamforming+ Technology"],
"specification": { "WiFi Speed": "867Mbps (5GHz) + 300Mbps (2.4GHz)", "Ports": "1 WAN, 3 LAN", "Technology": "MU-MIMO" },
"description": "শক্তিশালী অ্যান্টেনা এবং বীমফর্মিং প্রযুক্তি সহ বিস্তৃত কভারেজের জন্য একটি আদর্শ রাউটার।"
},
{
"id": 39,
"name": "V-SOL V2801SG XPON ONU",
"price": 1230,
"originalPrice": 1450,
"category": "Networking",
"images": ["https://www.bdstall.com/asset/product-image/giant_155099.jpg"],
"stock": 40,
"brand": "V-SOL",
"productModel": "V2801SG",
"warranty": "1 Year",
"features": ["GPON and EPON Adaptive", "1 Gigabit Port", "Compact Design"],
"specification": { "Mode": "XPON (EPON/GPON)", "Interface": "1 x 10/100/1000Mbps", "Power Adapter": "12V/0.5A" },
"description": "যেকোনো OLT-এর সাথে সামঞ্জস্যপূর্ণ একটি নির্ভরযোগ্য এবং উচ্চ কার্যক্ষমতাসম্পন্ন XPON ONU।"
},
{
"id": 40,
"name": "ADP Cat6 UTP Outdoor Double Jacket Cable (305m)",
"price": 4800,
"originalPrice": 5500,
"category": "Networking",
"images": ["https://independenttechbd.com/wp-content/uploads/2023/12/ADP-Cat6-UTP-Outdoor-Cable.jpg"],
"stock": 10,
"brand": "ADP",
"productModel": "Outdoor-CAT6",
"warranty": "No Warranty",
"features": ["Double Jacket for outdoor protection", "Weatherproof", "305 Meter Roll"],
"specification": { "Type": "UTP Cat6", "Jacket": "PVC+PE Double Jacket", "Conductor": "Copper/CCA" },
"description": "বাইরের পরিবেশ বা লম্বা দূরত্বের নেটওয়ার্কিং এর জন্য বিশেষভাবে ডিজাইন করা মজবুত এবং টেকসই ক্যাবল।"
},
{
"id": 41,
"name": "TP-Link TL-WR841N 300Mbps Wireless Router",
"price": 1750,
"originalPrice": 2000,
"category": "Networking",
"images": ["https://www.startech.com.bd/image/cache/catalog/router/tp-link/tl-wr841n/tl-wr841n-500x500.jpg"],
"stock": 50,
"brand": "TP-Link",
"productModel": "TL-WR841N",
"warranty": "1 Year",
"features": ["300Mbps Wireless Speed", "2 Fixed Antennas", "Easy Setup Assistant"],
"specification": { "Frequency": "2.4GHz", "Ports": "1 WAN, 4 LAN", "Modes": "Router, AP, Range Extender, WISP" },
"description": "একটি বহুল জনপ্রিয় এবং নির্ভরযোগ্য মডেল যা দৈনন্দিন ব্যবহারের জন্য চমৎকার পারফরম্যান্স প্রদান করে।"
}
];

let cart = JSON.parse(localStorage.getItem('treveloCart')) || [];
let currentProducts = [...products];
let currentFilter = 'all';

// =================================================================
//                      PAGE INITIALIZATION LOGIC
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();

    // Page-specific initializations
    if (document.getElementById('productGrid')) {
        initHomePage();
    }
    
    if (document.getElementById('productDetail')) {
        initProductDetailPage();
    }

    if (document.getElementById('checkoutCartItems')) {
        initCheckoutPage();
    }
});

// =================================================================
//                      PAGE-SPECIFIC FUNCTIONS
// =================================================================

// -------------------- HOME PAGE (index.html) --------------------
function initHomePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search');
    if (search) {
        document.getElementById('searchInput').value = search;
    }
    filterProducts('all');
    document.getElementById('priceRange').addEventListener('input', applyFilters);
}

function displayProducts(productsToShow) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    productGrid.innerHTML = '';

    if (productsToShow.length === 0) {
        productGrid.innerHTML = '<p>No products found matching your criteria.</p>';
        return;
    }

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        const isOutOfStock = product.stock === 0;

        productCard.innerHTML = `
            ${product.originalPrice ? `<div class="save-badge">Save ৳${product.originalPrice - product.price}</div>` : ''}
            <div class="product-image-container">
                <a href="product.html?id=${product.id}">
                    <img src="${product.images[0]}" alt="${product.name}" onerror="this.parentElement.innerHTML = '<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;\\'><i class=\\'fas fa-image fa-3x\\'></i></div>'; this.remove();">
                </a>
            </div>
            <div class="product-info">
                <h3><a href="product.html?id=${product.id}">${product.name}</a></h3>
                <div class="product-price">
                    <span class="current-price">৳${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price"><s>৳${product.originalPrice}</s></span>` : ''}
                </div>
                <div class="product-stock ${isOutOfStock ? 'stock-out' : 'stock-in'}">
                    ${isOutOfStock ? 'Out of Stock' : `In Stock: ${product.stock}`}
                </div>
                <div class="product-actions">
                    <div class="quantity-control">
                        <button onclick="updateQuantity(this, -1)" ${isOutOfStock ? 'disabled' : ''}>-</button>
                        <input type="number" value="1" min="1" readonly>
                        <button onclick="updateQuantity(this, 1)" ${isOutOfStock ? 'disabled' : ''}>+</button>
                    </div>
                    <div class="action-buttons">
                         <button class="add-to-cart" onclick="addToCart(${product.id}, this)" ${isOutOfStock ? 'disabled' : ''}>Add to Cart</button>
                         <button class="buy-now-btn" onclick="buyNow(${product.id}, this)" ${isOutOfStock ? 'disabled' : ''}>Buy Now</button>
                    </div>
                </div>
            </div>`;
        productGrid.appendChild(productCard);
    });
}

function applyFilters() {
    let filtered = [...products];
    if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
    }
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(searchTerm));
    }
    const maxPrice = parseInt(document.getElementById('priceRange').value);
    document.getElementById('currentPrice').textContent = `৳${maxPrice}`;
    filtered = filtered.filter(p => p.price <= maxPrice);
    currentProducts = filtered;
    sortProducts();
}

function filterProducts(category) {
    document.getElementById('sortOptions').value = 'default';
    currentFilter = category;
    document.querySelectorAll('.category-list a').forEach(a => a.classList.remove('active'));
    document.querySelector(`.category-list a[onclick*="'${category}'"]`).classList.add('active');
    let categoryProducts = category === 'all' ? products : products.filter(p => p.category === category);
    updatePriceSlider(categoryProducts);
    applyFilters();
}

function updatePriceSlider(productsForSlider) {
    const priceRange = document.getElementById('priceRange');
    if (!priceRange) return;
    if (productsForSlider.length > 0) {
        const prices = productsForSlider.map(p => p.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);
        priceRange.min = minPrice;
        priceRange.max = maxPrice;
        priceRange.value = maxPrice;
        document.getElementById('minPriceLabel').textContent = `৳${minPrice}`;
        document.getElementById('maxPriceLabel').textContent = `৳${maxPrice}`;
        document.getElementById('currentPrice').textContent = `৳${maxPrice}`;
    } else {
        priceRange.min = 0; priceRange.max = 2000; priceRange.value = 2000;
        document.getElementById('minPriceLabel').textContent = '৳0';
        document.getElementById('maxPriceLabel').textContent = '৳2000+';
        document.getElementById('currentPrice').textContent = `৳2000`;
    }
}

// -------------------- PRODUCT DETAIL PAGE (product.html) --------------------
let currentImageIndex = 0;
let productImages = [];

function initProductDetailPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    const detailContainer = document.getElementById('productDetail');

    if (product && detailContainer) {
        productImages = product.images;
        renderProductDetails(product);
        renderRelatedProducts(product);
        setupLightbox();
    } else if (detailContainer) {
        detailContainer.innerHTML = '<p>Product not found. Please <a href="index.html">return to the home page</a>.</p>';
    }
}

function renderProductDetails(product) {
    document.title = `${product.name} - Trevelo`;
    const breadcrumbEl = document.getElementById('breadcrumb');
    if (breadcrumbEl) {
        breadcrumbEl.innerHTML = `<a href="index.html">Home</a> > <a href="index.html?category=${product.category}">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</a> > ${product.name}`;
    }
    
    const isOutOfStock = product.stock === 0;
    const productDetailHtml = `
        <div class="product-gallery">
            <div class="main-image-container">
                <img src="${product.images[0]}" id="mainProductImage" alt="${product.name}" onclick="openLightbox(0)">
            </div>
            <div class="thumbnail-gallery">
                ${product.images.map((img, index) => `<img src="${img}" class="thumbnail-img ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this, ${index})">`).join('')}
            </div>
        </div>
        <div class="product-summary">
            <h1>${product.name}</h1>
            <table class="summary-table">
                <tbody>
                    ${product.originalPrice ? `<tr><td>Product Price</td><td><s>৳${product.originalPrice}</s></td></tr>` : ''}
                    <tr><td>Special Price</td><td><strong>৳${product.price}</strong></td></tr>
                    <tr><td>Stock Status</td><td>${isOutOfStock ? '<span style="color:red;">Out of Stock</span>' : '<span style="color:green;">In Stock</span>'}</td></tr>
                    ${product.brand ? `<tr><td>Brand</td><td>${product.brand}</td></tr>` : ''}
                    ${product.productModel ? `<tr><td>Product model</td><td>${product.productModel}</td></tr>` : ''}
                    ${product.warranty ? `<tr><td>Warranty</td><td>${product.warranty}</td></tr>` : ''}
                </tbody>
            </table>
            ${product.features ? `<h3>Key Features</h3><ul class="features-list">${product.features.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
            <div class="actions-section">
                <div class="price-section">
                    ৳${product.price}
                    ${product.originalPrice ? `<span class="original-price-detail"><s>৳${product.originalPrice}</s></span>` : ''}
                </div>
                <div class="quantity-control">
                    <button onclick="updateQuantity(this, -1)" ${isOutOfStock ? 'disabled' : ''}>-</button>
                    <input type="number" value="1" min="1" readonly>
                    <button onclick="updateQuantity(this, 1)" ${isOutOfStock ? 'disabled' : ''}>+</button>
                </div>
                <button class="add-to-cart-detail" onclick="addToCart(${product.id}, this)" ${isOutOfStock ? 'disabled' : ''}>Add to Cart</button>
            </div>
        </div>
        <div class="product-tabs">
            <div class="tab-buttons">
                <button class="tab-btn active" onclick="openTab(event, 'Specification')">Specification</button>
                <button class="tab-btn" onclick="openTab(event, 'Description')">Description</button>
            </div>
            <div id="Specification" class="tab-content active">${renderSpecification(product.specification)}</div>
            <div id="Description" class="tab-content"><p>${product.description || 'No description available.'}</p></div>
        </div>`;
    document.getElementById('productDetail').innerHTML = productDetailHtml;
}

function renderSpecification(spec) {
    if (!spec) return '<p>No specification available.</p>';
    let html = '<table class="spec-table">';
    for (const category in spec) {
        html += `<tbody><tr><td colspan="2" class="spec-category-title"><h4>${category}</h4></td></tr>`;
        for (const key in spec[category]) {
            html += `<tr><td>${key}</td><td>${spec[category][key]}</td></tr>`;
        }
        html += `</tbody>`;
    }
    return html;
}

function renderRelatedProducts(currentProduct) {
    const relatedGrid = document.getElementById('relatedProductsGrid');
    if (!relatedGrid) return;

    const related = products.filter(p => p.category === currentProduct.category && p.id !== currentProduct.id).slice(0, 4);
    const relatedSection = document.querySelector('.related-products-section');

    if(related.length === 0 && relatedSection) {
        relatedSection.style.display = 'none';
        return;
    }
    relatedGrid.innerHTML = related.map(p => `
        <div class="product-card">
            <a href="product.html?id=${p.id}">
                <div class="product-image-container"><img src="${p.images[0]}" alt="${p.name}"></div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <div class="product-price"><span class="current-price">৳${p.price}</span></div>
                </div>
            </a>
        </div>`).join('');
}

function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = "none");
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    const tabElement = document.getElementById(tabName);
    if(tabElement) tabElement.style.display = "block";
    evt.currentTarget.classList.add('active');
}

function changeMainImage(src, thumbElement, index) {
    const mainImage = document.getElementById('mainProductImage');
    if(mainImage) mainImage.src = src;
    currentImageIndex = index;
    document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active'));
    thumbElement.classList.add('active');
}

function setupLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        if(closeBtn) closeBtn.onclick = () => lightbox.style.display = "none";
        if(prevBtn) prevBtn.onclick = () => changeLightboxImage(-1);
        if(nextBtn) nextBtn.onclick = () => changeLightboxImage(1);
    }
}
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightbox && lightboxImg && productImages.length > 0) {
        lightbox.style.display = "block";
        lightboxImg.src = productImages[currentImageIndex];
    }
}
function changeLightboxImage(step) {
    currentImageIndex += step;
    if (currentImageIndex >= productImages.length) currentImageIndex = 0;
    if (currentImageIndex < 0) currentImageIndex = productImages.length - 1;
    const lightboxImg = document.getElementById('lightboxImg');
    if (lightboxImg) lightboxImg.src = productImages[currentImageIndex];
}

// -------------------- CHECKOUT PAGE (checkout.html) --------------------
const shippingCharge = 60;
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xzzgyzno';

function initCheckoutPage() {
    if (cart.length === 0) {
        alert('Your cart is empty. Redirecting to home page.');
        window.location.href = 'index.html';
        return;
    }
    displayCheckoutCart();
    const form = document.getElementById('paymentForm');
    if(form) form.addEventListener('submit', handleFormSubmit);
}

function displayCheckoutCart() {
    const cartItemsContainer = document.getElementById('checkoutCartItems');
    if (!cartItemsContainer) return;
    
    let subtotal = 0;
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        cartItemsContainer.innerHTML += `
            <div class="checkout-cart-item">
                <div class="checkout-item-image"><img src="${item.images[0]}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/60'"></div>
                <div class="checkout-item-details">
                    <h4>${item.name}</h4>
                    <p>৳${item.price.toFixed(2)}</p>
                </div>
                <div class="checkout-item-controls">
                    <div class="checkout-quantity-control">
                        <button onclick="updateCheckoutQuantity(${item.id}, -1)">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button onclick="updateCheckoutQuantity(${item.id}, 1)">+</button>
                    </div>
                    <div class="item-price">৳${itemTotal.toFixed(2)}</div>
                    <button class="checkout-item-remove-btn" onclick="removeCheckoutItem(${item.id})">×</button>
                </div>
            </div>`;
    });

    const finalTotal = subtotal + shippingCharge;
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('finalTotal').textContent = finalTotal.toFixed(2);
    document.getElementById('paidAmount').value = finalTotal.toFixed(2);
}

function updateCheckoutQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        const newQuantity = item.quantity + change;
        if (item.stock && newQuantity > item.stock) {
            showNotification(`Sorry, only ${item.stock} items are in stock.`, 'error');
            return;
        }
        item.quantity = newQuantity < 1 ? 1 : newQuantity;
        saveCart();
        displayCheckoutCart();
    }
}

function removeCheckoutItem(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveCart();
    if (cart.length === 0) {
        alert('Your cart is now empty. Redirecting to home page.');
        window.location.href = 'index.html';
    } else {
        displayCheckoutCart();
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> প্রক্রিয়াকরণ...';
    submitBtn.disabled = true;

    const formData = new FormData(e.target);
    const orderId = 'TRV' + Date.now().toString().slice(-8);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + shippingCharge;
    
    const orderData = {
        orderId: orderId,
        customerName: formData.get('customerName'),
        customerPhone: formData.get('customerPhone'),
        customerAddress: formData.get('customerAddress'),
        paymentMethod: formData.get('paymentMethod'),
        transactionId: formData.get('transactionId'),
        senderNumber: formData.get('senderNumber'),
        paidAmount: `৳${total.toFixed(2)}`,
        notes: formData.get('orderNotes'),
        orderDate: new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }),
        items_summary: cart.map(item => `${item.name} (৳${item.price} x ${item.quantity}) = ৳${(item.price * item.quantity).toFixed(2)}`).join('\n'),
        subtotal: `৳${subtotal.toFixed(2)}`,
        shipping: `৳${shippingCharge.toFixed(2)}`,
        total: `৳${total.toFixed(2)}`,
        _subject: `New Order from Trevelo: ${orderId}`,
    };

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(orderData),
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
        });
        if (response.ok) {
            localStorage.removeItem('treveloCart');
            document.getElementById('generatedOrderId').textContent = orderId;
            document.getElementById('successModal').style.display = 'block';
        } else {
            throw new Error('Form submission failed.');
        }
    } catch (error) {
        alert('There was an error submitting your order. Please try again or contact us via WhatsApp.');
    } finally {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> অর্ডার সাবমিট করুন';
        submitBtn.disabled = false;
    }
}


// =================================================================
//                      GLOBAL HELPER FUNCTIONS
// =================================================================

function sortProducts() {
    const sortBy = document.getElementById('sortOptions').value;
    let sortedProducts = [...currentProducts];
    switch (sortBy) {
        case 'price-low-high': sortedProducts.sort((a, b) => a.price - b.price); break;
        case 'price-high-low': sortedProducts.sort((a, b) => b.price - a.price); break;
        case 'name-a-z': sortedProducts.sort((a, b) => a.name.localeCompare(b.name)); break;
        case 'name-z-a': sortedProducts.sort((a, b) => b.name.localeCompare(a.name)); break;
        default: sortedProducts.sort((a, b) => a.id - b.id); break;
    }
    displayProducts(sortedProducts);
}

function performSearch() {
    const searchTerm = document.getElementById('searchInput').value;
    if (!document.getElementById('productGrid')) {
        window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
    } else {
        applyFilters();
    }
}

function updateQuantity(element, change) {
    const input = element.parentElement.querySelector('input');
    let currentValue = parseInt(input.value);
    currentValue += change;
    if (currentValue < 1) currentValue = 1;
    input.value = currentValue;
}

function addToCart(productId, element) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) {
        showNotification('This item is out of stock.', 'error');
        return;
    }
    const quantityControl = element.closest('.actions-section, .product-actions');
    const quantityToAdd = parseInt(quantityControl.querySelector('input').value);
    const itemInCart = cart.find(item => item.id === productId);
    const quantityAlreadyInCart = itemInCart ? itemInCart.quantity : 0;

    if ((quantityAlreadyInCart + quantityToAdd) > product.stock) {
        showNotification(`Sorry, only ${product.stock} items are in stock.`, 'error');
        return;
    }

    if (itemInCart) {
        itemInCart.quantity += quantityToAdd;
    } else {
        cart.push({ ...product, quantity: quantityToAdd });
    }
    saveCart();
    updateCartCount();
    showNotification(`${quantityToAdd} x ${product.name} added to cart!`, 'success');
}

function buyNow(productId, element) {
    addToCart(productId, element);
    if (cart.find(item => item.id === productId)) {
        goToCheckout();
    }
}

function updateCartCount() {
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

function saveCart() {
    localStorage.setItem('treveloCart', JSON.stringify(cart));
}

function openCart() {
    const modal = document.getElementById('cartModal');
    if (!modal) return;

    const cartItems = modal.querySelector('#cartItems');
    const cartTotalEl = modal.querySelector('#cartTotal');
    if (!cartItems || !cartTotalEl) return;
    
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center;">Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            cartItems.innerHTML += `
                <div class="cart-item">
                    <div>
                        <h4>${item.name}</h4>
                        <p>৳${item.price} x ${item.quantity}</p>
                    </div>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <strong>৳${itemTotal.toFixed(2)}</strong>
                        <button onclick="removeFromCart(${item.id})" style="background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 18px;">×</button>
                    </div>
                </div>`;
        });
    }
    cartTotalEl.textContent = total.toFixed(2);
    modal.style.display = 'block';
}

function closeCart() {
    const modal = document.getElementById('cartModal');
    if(modal) modal.style.display = 'none';
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    openCart(); 
}

function goToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    window.location.href = 'checkout.html';
}

function openWhatsApp() {
    window.open(`https://wa.me/8801234567890?text=${encodeURIComponent('Hello! I am interested in your products from Trevelo.')}`, '_blank');
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `toast-notification ${type}`;
    notification.innerHTML = `<i class="fas ${type === 'error' ? 'fa-times-circle' : 'fa-check-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
}

const style = document.createElement('style');
style.innerHTML = `
.toast-notification {
    position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
    color: white; padding: 15px 25px; border-radius: 8px; z-index: 3000; 
    box-shadow: 0 4px 8px rgba(0,0,0,0.2); font-size: 16px; 
    animation: fadeinout 4s forwards;
}
.toast-notification.success { background: #10b981; }
.toast-notification.error { background: #ef4444; }
@keyframes fadeinout {
    0% { bottom: -50px; opacity: 0; }
    15% { bottom: 20px; opacity: 1; }
    85% { bottom: 20px; opacity: 1; }
    100% { bottom: -50px; opacity: 0; }
}`;
document.head.appendChild(style);