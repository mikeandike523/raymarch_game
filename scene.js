var sceneDistanceScript=`
    vec3 pa=p-vec3(0,0,1.2);
    vec3 q = abs(pa) - vec3(0.4,0.4,0.4);
    return length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
`;

var shadingScript=`
    return vec3(1.0,0.2,0.8);
`;