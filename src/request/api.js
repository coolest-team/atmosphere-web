import {get} from "@/request/http";

export const getTimeline = p => get('/getTimeline/',p);

export const getProvincePollutedParallel = p => get('/getProvincePollutedParallel/', p)