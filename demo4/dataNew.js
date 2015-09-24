var defaultData = [
    {
        "university": "AVERAGE",
        "ACCESS": "-0.025",
        "SUPPLY AND DEMAND": "0.005",
        "LEARNING JOURNEY": "0",
        "POST GRADUATE OUTCOMES": "-0.005",
        "RESEARCH INTENSITY": "-0.02"
    },
    {
        "university": "Algoma",
        "ACCESS": "5.3",
        "SUPPLY AND DEMAND": "-0.4",
        "LEARNING JOURNEY": "-0.9",
        "POST GRADUATE OUTCOMES": "-2.2",
        "RESEARCH INTENSITY": "-1.1"
    },
    {
        "university": "Brock",
        "ACCESS": "-0.7",
        "SUPPLY AND DEMAND": "-0.5",
        "LEARNING JOURNEY": "0.1",
        "POST GRADUATE OUTCOMES": "0",
        "RESEARCH INTENSITY": "-0.6"
    },
    {
        "university": "Carleton",
        "ACCESS": "-1.7",
        "SUPPLY AND DEMAND": "0.2",
        "LEARNING JOURNEY": "0",
        "POST GRADUATE OUTCOMES": "-0.3",
        "RESEARCH INTENSITY": "0"
    },
    {
        "university": "Guelph",
        "ACCESS": "-2.6",
        "SUPPLY AND DEMAND": "0.1",
        "LEARNING JOURNEY": "1.1",
        "POST GRADUATE OUTCOMES": "0.2",
        "RESEARCH INTENSITY": "0.3"
    },
    {
        "university": "Lakehead",
        "ACCESS": "1.6",
        "SUPPLY AND DEMAND": "-0.7",
        "LEARNING JOURNEY": "-0.4",
        "POST GRADUATE OUTCOMES": "0.2",
        "RESEARCH INTENSITY": "-0.7"
    },
    {
        "university": "Laurentian",
        "ACCESS": "9",
        "SUPPLY AND DEMAND": "-0.3",
        "LEARNING JOURNEY": "-0.2",
        "POST GRADUATE OUTCOMES": "0.8",
        "RESEARCH INTENSITY": "-0.7"
    },
    {
        "university": "McMaster",
        "ACCESS": "-2",
        "SUPPLY AND DEMAND": "0.3",
        "LEARNING JOURNEY": "0.4",
        "POST GRADUATE OUTCOMES": "0.5",
        "RESEARCH INTENSITY": "0.8"
    },
    {
        "university": "Nipissing",
        "ACCESS": "0.6",
        "SUPPLY AND DEMAND": "-0.6",
        "LEARNING JOURNEY": "0.6",
        "POST GRADUATE OUTCOMES": "-0.1",
        "RESEARCH INTENSITY": "-0.9"
    },
    {
        "university": "OCADU",
        "ACCESS": "1.2",
        "SUPPLY AND DEMAND": "0.4",
        "LEARNING JOURNEY": "0",
        "POST GRADUATE OUTCOMES": "-1.8",
        "RESEARCH INTENSITY": "-1"
    },
    {
        "university": "Ottawa",
        "ACCESS": "1.4",
        "SUPPLY AND DEMAND": "0.6",
        "LEARNING JOURNEY": "-0.3",
        "POST GRADUATE OUTCOMES": "0.2",
        "RESEARCH INTENSITY": "0.6"
    },
    {
        "university": "UOIT",
        "ACCESS": "3.3",
        "SUPPLY AND DEMAND": "-0.7",
        "LEARNING JOURNEY": "-1.1",
        "POST GRADUATE OUTCOMES": "0.7",
        "RESEARCH INTENSITY": "-0.3"
    },
    {
        "university": "Queen's",
        "ACCESS": "-5.5",
        "SUPPLY AND DEMAND": "0.5",
        "LEARNING JOURNEY": "1.2",
        "POST GRADUATE OUTCOMES": "0.7",
        "RESEARCH INTENSITY": "0.5"
    },
    {
        "university": "Ryerson",
        "ACCESS": "1.2",
        "SUPPLY AND DEMAND": "0.3",
        "LEARNING JOURNEY": "-0.4",
        "POST GRADUATE OUTCOMES": "0.3",
        "RESEARCH INTENSITY": "-0.5"
    },
    {
        "university": "Toronto",
        "ACCESS": "-2",
        "SUPPLY AND DEMAND": "1",
        "LEARNING JOURNEY": "-0.2",
        "POST GRADUATE OUTCOMES": "-0.2",
        "RESEARCH INTENSITY": "2.8"
    },
    {
        "university": "Trent",
        "ACCESS": "0.2",
        "SUPPLY AND DEMAND": "-0.5",
        "LEARNING JOURNEY": "0.2",
        "POST GRADUATE OUTCOMES": "-0.1",
        "RESEARCH INTENSITY": "-0.3"
    },
    {
        "university": "Waterloo",
        "ACCESS": "-1.7",
        "SUPPLY AND DEMAND": "0.6",
        "LEARNING JOURNEY": "0.1",
        "POST GRADUATE OUTCOMES": "1.4",
        "RESEARCH INTENSITY": "0.7"
    },
    {
        "university": "Western",
        "ACCESS": "-3",
        "SUPPLY AND DEMAND": "0.7",
        "LEARNING JOURNEY": "0.8",
        "POST GRADUATE OUTCOMES": "0.8",
        "RESEARCH INTENSITY": "0.6"
    },
    {
        "university": "Laurier",
        "ACCESS": "-2.3",
        "SUPPLY AND DEMAND": "-0.3",
        "LEARNING JOURNEY": "0.1",
        "POST GRADUATE OUTCOMES": "0",
        "RESEARCH INTENSITY": "-0.5"
    },
    {
        "university": "Windsor",
        "ACCESS": "-1.4",
        "SUPPLY AND DEMAND": "-0.4",
        "LEARNING JOURNEY": "-0.6",
        "POST GRADUATE OUTCOMES": "-0.7",
        "RESEARCH INTENSITY": "-0.2"
    },
    {
        "university": "York",
        "ACCESS": "-1.4",
        "SUPPLY AND DEMAND": "-0.2",
        "LEARNING JOURNEY": "-0.5",
        "POST GRADUATE OUTCOMES": "-0.5",
        "RESEARCH INTENSITY": "0.1"
    }
]; 

var cat1 = [
    {
        "university": "Algoma",
        "First Gen": "1.0",
        "Aboriginal": "2.4",
        "French": "-0.3",
        "OSAP": "0.7",
        "PT": "0.8",
        "A:R": "-0.8",
        "Transfer": "1.5"
    },
    {
        "university": "Brock",
        "First Gen": "0.6",
        "Aboriginal": "-0.5",
        "French": "-0.4",
        "OSAP": "0.1",
        "PT": "-0.5",
        "A:R": "0.5",
        "Transfer": "-0.5"
    },
    {
        "university": "Carleton",
        "First Gen": "-0.5",
        "Aboriginal": "0.0",
        "French": "-0.1",
        "OSAP": "-0.5",
        "PT": "-0.1",
        "A:R": "0.1",
        "Transfer": "-0.6"
    },
    {
        "university": "Guelph",
        "First Gen": "-0.9",
        "Aboriginal": "-0.5",
        "French": "-0.4",
        "OSAP": "-0.5",
        "PT": "-0.5",
        "A:R": "0.5",
        "Transfer": "-0.4"
    },
    {
        "university": "Lakehead",
        "First Gen": "-0.1",
        "Aboriginal": "1.8",
        "French": "-0.3",
        "OSAP": "-0.6",
        "PT": "0.4",
        "A:R": "-0.4",
        "Transfer": "0.9"
    },
    {
        "university": "Laurentian",
        "First Gen": "2.7",
        "Aboriginal": "2.3",
        "French": "2.2",
        "OSAP": "-0.7",
        "PT": "1.0",
        "A:R": "-1.0",
        "Transfer": "2.6"
    },
    {
        "university": "McMaster",
        "First Gen": "-0.5",
        "Aboriginal": "-0.4",
        "French": "-0.4",
        "OSAP": "0.0",
        "PT": "-0.5",
        "A:R": "0.5",
        "Transfer": "-0.8"
    },
    {
        "university": "Nipissing",
        "First Gen": "-0.7",
        "Aboriginal": "0.8",
        "French": "-0.2",
        "OSAP": "0.7",
        "PT": "-0.3",
        "A:R": "0.3",
        "Transfer": "0.0"
    },
    {
        "university": "OCADU",
        "First Gen": "-0.3",
        "Aboriginal": "-0.3",
        "French": "-0.3",
        "OSAP": "0.8",
        "PT": "2.2",
        "A:R": "-2.2",
        "Transfer": "1.3"
    },
    {
        "university": "Ottawa",
        "First Gen": "-0.8",
        "Aboriginal": "-0.1",
        "French": "3.4",
        "OSAP": "-1.2",
        "PT": "1.1",
        "A:R": "-1.1",
        "Transfer": "0.1"
    },
    {
        "university": "UOIT",
        "First Gen": "2.4",
        "Aboriginal": "-0.7",
        "French": "-0.5",
        "OSAP": "1.0",
        "PT": "-0.3",
        "A:R": "0.3",
        "Transfer": "1.1"
    },
    {
        "university": "Queen's",
        "First Gen": "-0.9",
        "Aboriginal": "-0.6",
        "French": "-0.3",
        "OSAP": "-2.6",
        "PT": "-1.1",
        "A:R": "1.1",
        "Transfer": "-1.0"
    },
    {
        "university": "Ryerson",
        "First Gen": "0.3",
        "Aboriginal": "-0.6",
        "French": "-0.4",
        "OSAP": "1.8",
        "PT": "2.0",
        "A:R": "-2.0",
        "Transfer": "0.1"
    },
    {
        "university": "Toronto",
        "First Gen": "-0.2",
        "Aboriginal": "-0.6",
        "French": "-0.4",
        "OSAP": "-0.4",
        "PT": "-0.8",
        "A:R": "0.8",
        "Transfer": "-0.5"
    },
    {
        "university": "Trent",
        "First Gen": "-0.7",
        "Aboriginal": "-0.1",
        "French": "-0.4",
        "OSAP": "1.2",
        "PT": "0.0",
        "A:R": "0.0",
        "Transfer": "0.2"
    },
    {
        "university": "Waterloo",
        "First Gen": "-0.4",
        "Aboriginal": "-0.8",
        "French": "-0.3",
        "OSAP": "0.8",
        "PT": "-1.1",
        "A:R": "1.1",
        "Transfer": "-1.0"
    },
    {
        "university": "Western",
        "First Gen": "-0.8",
        "Aboriginal": "-0.5",
        "French": "-0.4",
        "OSAP": "-0.9",
        "PT": "-1.4",
        "A:R": "1.4",
        "Transfer": "-0.4"
    },
    {
        "university": "Laurier",
        "First Gen": "-0.3",
        "Aboriginal": "-0.1",
        "French": "-0.4",
        "OSAP": "-0.4",
        "PT": "-1.0",
        "A:R": "1.0",
        "Transfer": "-1.0"
    },
    {
        "university": "Windsor",
        "First Gen": "-0.2",
        "Aboriginal": "-0.6",
        "French": "-0.3",
        "OSAP": "0.4",
        "PT": "0.0",
        "A:R": "0.0",
        "Transfer": "-0.6"
    },
    {
        "university": "York",
        "First Gen": "0.3",
        "Aboriginal": "-0.8",
        "French": "-0.3",
        "OSAP": "0.5",
        "PT": "-0.1",
        "A:R": "0.1",
        "Transfer": "-1.0"
    }
];

var cat2 = [
    {
        "university": "Algoma",
        "A:R": "-0.67",
        "1st": "-0.15",
        "ROC": "-1.11",
        "Int'l": "2.63",
        "Marks": "-2.47"
    },
    {
        "university": "Brock",
        "A:R": "-0.03",
        "1st": "-0.82",
        "ROC": "-0.92",
        "Int'l": "-0.35",
        "Marks": "-0.47"
    },
    {
        "university": "Carleton",
        "A:R": "0.03",
        "1st": "-0.41",
        "ROC": "0.58",
        "Int'l": "0.66",
        "Marks": "-0.07"
    },
    {
        "university": "Guelph",
        "A:R": "-0.37",
        "1st": "0.29",
        "ROC": "0.90",
        "Int'l": "-0.93",
        "Marks": "0.66"
    },
    {
        "university": "Lakehead",
        "A:R": "-0.81",
        "1st": "0.16",
        "ROC": "-0.35",
        "Int'l": "-1.19",
        "Marks": "-1.13"
    },
    {
        "university": "Laurentian",
        "A:R": "0.18",
        "1st": "-0.36",
        "ROC": "-0.38",
        "Int'l": "-0.21",
        "Marks": "-0.71"
    },
    {
        "university": "McMaster",
        "A:R": "1.51",
        "1st": "-0.69",
        "ROC": "-0.59",
        "Int'l": "-0.10",
        "Marks": "1.22"
    },
    {
        "university": "Nipissing",
        "A:R": "-0.51",
        "1st": "0.21",
        "ROC": "-0.65",
        "Int'l": "-1.40",
        "Marks": "-0.61"
    },
    {
        "university": "OCADU",
        "A:R": "-1.98",
        "1st": "3.70",
        "ROC": "0.41",
        "Int'l": "0.13",
        "Marks": "-0.25"
    },
    {
        "university": "Ottawa",
        "A:R": "0.21",
        "1st": "-0.02",
        "ROC": "2.36",
        "Int'l": "-0.40",
        "Marks": "0.64"
    },
    {
        "university": "UOIT",
        "A:R": "-0.95",
        "1st": "-0.45",
        "ROC": "-0.81",
        "Int'l": "-0.28",
        "Marks": "-1.17"
    },
    {
        "university": "Queen's",
        "A:R": "-0.37",
        "1st": "0.61",
        "ROC": "1.79",
        "Int'l": "-0.94",
        "Marks": "1.22"
    },
    {
        "university": "Ryerson",
        "A:R": "2.25",
        "1st": "-0.22",
        "ROC": "-0.47",
        "Int'l": "-0.89",
        "Marks": "0.81"
    },
    {
        "university": "Toronto",
        "A:R": "0.18",
        "1st": "0.82",
        "ROC": "1.02",
        "Int'l": "1.80",
        "Marks": "0.95"
    },
    {
        "university": "Trent",
        "A:R": "-0.02",
        "1st": "-0.88",
        "ROC": "-0.88",
        "Int'l": "0.20",
        "Marks": "-0.69"
    },
    {
        "university": "Waterloo",
        "A:R": "0.11",
        "1st": "0.18",
        "ROC": "0.48",
        "Int'l": "1.06",
        "Marks": "1.21"
    },
    {
        "university": "Western",
        "A:R": "1.73",
        "1st": "-0.66",
        "ROC": "0.98",
        "Int'l": "0.19",
        "Marks": "1.20"
    },
    {
        "university": "Laurier",
        "A:R": "0.95",
        "1st": "-1.05",
        "ROC": "-0.82",
        "Int'l": "-0.74",
        "Marks": "0.11"
    },
    {
        "university": "Windsor",
        "A:R": "-0.53",
        "1st": "-0.20",
        "ROC": "-0.93",
        "Int'l": "0.32",
        "Marks": "-0.53"
    },
    {
        "university": "York",
        "A:R": "-0.93",
        "1st": "-0.07",
        "ROC": "-0.59",
        "Int'l": "0.44",
        "Marks": "0.06"
    }
];