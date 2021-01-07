var auxillaryFunctions=`
int test(){
	return 0;
}
`;


var sceneDistanceScript=`
    vec3 pa=vec3(pt.x,pt.y,pt.z);
    vec3 q = abs(pa) - vec3(0.5,0.5,0.5);
    float dist1= length(max(q,0.0)) + min(max(q.x,max(q.y,q.z)),0.0);
  return dist1;
`;

var shadingScript=`

   // return vec3(dot(n,normalize(vec3(1.,1.,1.))));
   vec3 baseColor=abs(n);
   float condition= dot(n,normalize(vec3(1.,1.,1.)));
   if(condition<0.){
		float brick = 1.;
		if(mod(floor(pt.x*10.)+floor(pt.y*10.)+floor(pt.z*10.),2.)<0.0001)
		{
			brick=0.6;
		}
		return baseColor*brick;

   }
   return baseColor;
`;
