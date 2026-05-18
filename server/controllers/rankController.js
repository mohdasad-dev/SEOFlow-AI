
//Add keyword to track.

import KeywordTracking from "../models/keycordTracking.js";
import { keywordTracking } from "../services/keywordTrackingService.js";

export const addKeyword = async(req, res) => {
    try {
        const {keyword, url} = req.body;

        if(!keyword || !url){
            return res.status(400).json({success:false, message: "Keyword and URL are required"});
        }

        //Extract domain from URL

        let domain;
        try {
            const urlobj = new URL(url.startWith("http")? url : `https://${url}`);
            domain = urlobj.hostname.replace("www.", "")
        } catch {
            return res.status(400).json({success:false, message: "Invalid  URL format"});
        }

        // Check if already tracking this keyword+domain

        const existing = await KeywordTracking.findOne({userId: req.userId, keyword: keyword.toLowerCase().trim(), domain});

        if(existing){
            return res.status(400).json({success:false, message: "Already tracking this Keyword for this domain"});
        }

        //create tracking entry

        const tracking = await KeywordTracking.create({
            userId: req.body,
            keyword:keyword.toLowerCase().trim(),
            url:url.startWith("http") ? url :`https://${url}`,
            domain,
            status:"checking",
        })

        rex.status(201).json({success: true, message: "Keyword tracking started", tracking});
        keywordTracking(tracking)

    } catch (error) {
        console.error("Add keyword error:", error.message);
        if(error.code === 11000) return res.status(400).json({success:false,message:"Already tracking this keyword"});
        res.status(500).json({success:false,message:"Server Error"});
    }
}


// Get all tracked keywords for user.

export const getKeywords = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}


// Manually refresh a keywords with full history.

export const getKeyword = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// Manually refresh a keywords ranking.

export const refreshKeyword = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}


// Delete keywords tracking.

export const deleteKeyword = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// toggle racking active/inactive .

export const toggleTracking = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}