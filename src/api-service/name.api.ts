import React, { useEffect, useState } from 'react';

export class NameReq{
    static async getName() {
    const url = "http://localhost:3001/names";
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json;
   }
}
