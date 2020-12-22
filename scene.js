var sceneDistanceScript=`
    vec3 pa=vec3(p.x,p.y-0.2,p.z);
    vec3 q = abs(pa) - vec3(0.4,0.4,0.4);
    float dist1= length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
    float dist2=p.y;
 return min(dist1,dist2);
`;

var shadingScript=`
vec3 npt= ro+0.99*(pt-ro);
if(pt.y>0.01)
    return vec3(dot(n,vec3(cos(PI/4.),sin(PI/4.),sin(PI/4.))));
    else{
        vec3 col=vec3(0.);
        float d= march(npt,vec3(cos(PI/4.),sin(PI/4.),sin(PI/4.)));
        if(d>0.0)
        col= vec3(0.0,0.3,0.0);
    else
    col =vec3(0.0,1.0,0.0);

    float brick=1.0;
    if(int(mod((floor(pt.x)+floor(pt.z)),2.))==0)
    brick=0.2;
    float scl=1.-length(pt-ro)*5./MARCH_DRAWDIST;
    return scl*brick*col+(1.-scl)*vec3(0.0,0.0,1.0);
    }
`;

var bgShadingScript=`
      return (1.-h)*vec3(0.0,0.0,1.0)+h*vec3(0.4,0.4,1.0);
`;