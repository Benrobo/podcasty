import React, { useState } from 'react'

export async function getPodcast() {
    let api = "http://localhost:5000/api/podcast"
    let req = await fetch(api);
    let res = await req.json();

    return { req, res };

}


export async function request(api, method, data, headers) {
    let req = await fetch(api, {
        method,
        headers,
        body: JSON.stringify(data)
    });

    let res = await req.json();

    return { req, res }
}