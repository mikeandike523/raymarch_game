var sceneDistanceScript=`
    vec3 pa=vec3(p.x,p.y-0.2,p.z);
    vec3 q = abs(pa) - vec3(0.4,0.4,0.4);
    float dist1= length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
  return dist1;
`;

var shadingScript=`

   // return vec3(dot(n,normalize(vec3(1.,1.,1.))));
   return abs(n);
`;
