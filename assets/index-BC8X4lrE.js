import{c as rr,N as Dt,S as ba,C as $e,F as Ca,V as Ne,R as or,a as ht,w as Yn,M as on,W as hi,b as Zt,d as rt,L as en,H as An,U as Gt,D as bt,B as St,e as sn,f as Rn,p as sr,E as cr,g as Ze,P as nn,A as lr,h as Ln,i as Ct,j as Sn,k as ai,l as cn,m as ln,n as Pa,o as fr,q as zt,r as Mn,s as dr,t as ur,u as Jt,O as pr,v as hr,x as mr,y as _r,z as gr,G as vr,I as Er,J as Sr,K as Mr,Q as Tr,T as xr,X as Ar,Y as Rr,Z as br,_ as Cr,$ as Pr,a0 as Dr,a1 as Lr,a2 as wn,a3 as Wt,a4 as pn,a5 as wr,a6 as an,a7 as Ur,a8 as yr,a9 as Ir,aa as Nr,ab as Da,ac as Or,ad as Fr,ae as Br,af as La,ag as Ge,ah as Gr,ai as Hr,aj as Vr,ak as Ht,al as Kt,am as rn,an as mt,ao as wa,ap as Bt,aq as Rt,ar as Tn,as as Ua,at as ya,au as Ia,av as Na,aw as kr,ax as zr,ay as Wr,az as Xr,aA as Oa,aB as Ft,aC as Yr,aD as Kr,aE as qr,aF as Fa,aG as Zr,aH as Ba,aI as Ga,aJ as Un,aK as yn,aL as In,aM as Nn,aN as Qe,aO as mi,aP as _i,aQ as gi,aR as vi,aS as Ei,aT as Si,aU as Mi,aV as Ti,aW as xi,aX as Ai,aY as Ri,aZ as bi,a_ as Ci,a$ as Pi,b0 as Di,b1 as Li,b2 as wi,b3 as Ui,b4 as yi,b5 as Ii,b6 as Ni,b7 as Oi,b8 as Fi,b9 as Bi,ba as Gi,bb as Hi,bc as Vi,bd as ki,be as Kn,bf as qn,bg as Zn,bh as $n,bi as jn,bj as Qn,bk as Jn,bl as $r,bm as zi,bn as jr,bo as vn,bp as Qr,bq as Wi,br as Xi,bs as Pt,bt as ei,bu as ti,bv as Jr,bw as Ha,bx as eo,by as bn,bz as to,bA as no,bB as Va,bC as ka,bD as Yi,bE as za,bF as Ki,bG as Wa,bH as fn,bI as $t,bJ as io,bK as xn,bL as ao,bM as ro,bN as oo,bO as qi,bP as pt,bQ as so,bR as co,bS as lo,bT as fo,bU as uo,bV as po,bW as ho,bX as mo,bY as _o,bZ as go,b_ as vo,b$ as Eo,c0 as So,c1 as Mo,c2 as To,c3 as xo,c4 as Ao,c5 as Ro,c6 as bo,c7 as ri,c8 as Xa,c9 as It,ca as Co,cb as Po,cc as ni,cd as On,ce as Fn,cf as Zi,cg as Do,ch as Lo,ci as wo,cj as $i,ck as Uo,cl as yo,cm as Io,cn as Ya,co as No,cp as Oo,cq as Fo,cr as Bo,cs as qt,ct as Xt,cu as ji,cv as Qi,cw as Go,cx as Ho,cy as Vo,cz as ko,cA as Bn,cB as zo,cC as Wo,cD as Xo,cE as Yo,cF as Tt,cG as Ko}from"./index-Bxs-4Fg-.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ka(){let e=null,n=!1,t=null,i=null;function o(r,u){t(r,u),i=e.requestAnimationFrame(o)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(o),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function qo(e){const n=new WeakMap;function t(f,T){const v=f.array,P=f.usage,m=v.byteLength,E=e.createBuffer();e.bindBuffer(T,E),e.bufferData(T,v,P),f.onUploadCallback();let A;if(v instanceof Float32Array)A=e.FLOAT;else if(typeof Float16Array<"u"&&v instanceof Float16Array)A=e.HALF_FLOAT;else if(v instanceof Uint16Array)f.isFloat16BufferAttribute?A=e.HALF_FLOAT:A=e.UNSIGNED_SHORT;else if(v instanceof Int16Array)A=e.SHORT;else if(v instanceof Uint32Array)A=e.UNSIGNED_INT;else if(v instanceof Int32Array)A=e.INT;else if(v instanceof Int8Array)A=e.BYTE;else if(v instanceof Uint8Array)A=e.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)A=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:E,type:A,bytesPerElement:v.BYTES_PER_ELEMENT,version:f.version,size:m}}function i(f,T,v){const P=T.array,m=T.updateRanges;if(e.bindBuffer(v,f),m.length===0)e.bufferSubData(v,0,P);else{m.sort((A,B)=>A.start-B.start);let E=0;for(let A=1;A<m.length;A++){const B=m[E],L=m[A];L.start<=B.start+B.count+1?B.count=Math.max(B.count,L.start+L.count-B.start):(++E,m[E]=L)}m.length=E+1;for(let A=0,B=m.length;A<B;A++){const L=m[A];e.bufferSubData(v,L.start*P.BYTES_PER_ELEMENT,P,L.start,L.count)}T.clearUpdateRanges()}T.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function r(f){f.isInterleavedBufferAttribute&&(f=f.data);const T=n.get(f);T&&(e.deleteBuffer(T.buffer),n.delete(f))}function u(f,T){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const P=n.get(f);(!P||P.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const v=n.get(f);if(v===void 0)n.set(f,t(f,T));else if(v.version<f.version){if(v.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(v.buffer,f,T),v.version=f.version}}return{get:o,remove:r,update:u}}var Zo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$o=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jo=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,es=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ts=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ns=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,is=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,as=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rs=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,os=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ss=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cs=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ls=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fs=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ds=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,us=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ps=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hs=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ms=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_s=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gs=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vs=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Es=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ss=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ms=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ts=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xs=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,As=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rs="gl_FragColor = linearToOutputTexel( gl_FragColor );",bs=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cs=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ps=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ds=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ls=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ws=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Us=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ys=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Is=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ns=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Os=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fs=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bs=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gs=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hs=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Vs=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ks=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zs=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ws=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xs=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ys=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ks=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qs=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zs=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$s=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,js=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qs=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Js=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ec=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ic=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ac=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,dc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_c=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ec=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ac=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lc=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uc=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ic=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Oc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Bc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,el=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tl=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nl=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,il=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,al=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rl=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ol=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sl=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cl=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ll=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fl=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dl=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ul=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pl=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hl=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ml=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_l=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gl=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vl=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,El=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sl=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ml=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tl=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Al=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rl=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,bl=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cl=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:Zo,alphahash_pars_fragment:$o,alphamap_fragment:jo,alphamap_pars_fragment:Qo,alphatest_fragment:Jo,alphatest_pars_fragment:es,aomap_fragment:ts,aomap_pars_fragment:ns,batching_pars_vertex:is,batching_vertex:as,begin_vertex:rs,beginnormal_vertex:os,bsdfs:ss,iridescence_fragment:cs,bumpmap_pars_fragment:ls,clipping_planes_fragment:fs,clipping_planes_pars_fragment:ds,clipping_planes_pars_vertex:us,clipping_planes_vertex:ps,color_fragment:hs,color_pars_fragment:ms,color_pars_vertex:_s,color_vertex:gs,common:vs,cube_uv_reflection_fragment:Es,defaultnormal_vertex:Ss,displacementmap_pars_vertex:Ms,displacementmap_vertex:Ts,emissivemap_fragment:xs,emissivemap_pars_fragment:As,colorspace_fragment:Rs,colorspace_pars_fragment:bs,envmap_fragment:Cs,envmap_common_pars_fragment:Ps,envmap_pars_fragment:Ds,envmap_pars_vertex:Ls,envmap_physical_pars_fragment:Vs,envmap_vertex:ws,fog_vertex:Us,fog_pars_vertex:ys,fog_fragment:Is,fog_pars_fragment:Ns,gradientmap_pars_fragment:Os,lightmap_pars_fragment:Fs,lights_lambert_fragment:Bs,lights_lambert_pars_fragment:Gs,lights_pars_begin:Hs,lights_toon_fragment:ks,lights_toon_pars_fragment:zs,lights_phong_fragment:Ws,lights_phong_pars_fragment:Xs,lights_physical_fragment:Ys,lights_physical_pars_fragment:Ks,lights_fragment_begin:qs,lights_fragment_maps:Zs,lights_fragment_end:$s,logdepthbuf_fragment:js,logdepthbuf_pars_fragment:Qs,logdepthbuf_pars_vertex:Js,logdepthbuf_vertex:ec,map_fragment:tc,map_pars_fragment:nc,map_particle_fragment:ic,map_particle_pars_fragment:ac,metalnessmap_fragment:rc,metalnessmap_pars_fragment:oc,morphinstance_vertex:sc,morphcolor_vertex:cc,morphnormal_vertex:lc,morphtarget_pars_vertex:fc,morphtarget_vertex:dc,normal_fragment_begin:uc,normal_fragment_maps:pc,normal_pars_fragment:hc,normal_pars_vertex:mc,normal_vertex:_c,normalmap_pars_fragment:gc,clearcoat_normal_fragment_begin:vc,clearcoat_normal_fragment_maps:Ec,clearcoat_pars_fragment:Sc,iridescence_pars_fragment:Mc,opaque_fragment:Tc,packing:xc,premultiplied_alpha_fragment:Ac,project_vertex:Rc,dithering_fragment:bc,dithering_pars_fragment:Cc,roughnessmap_fragment:Pc,roughnessmap_pars_fragment:Dc,shadowmap_pars_fragment:Lc,shadowmap_pars_vertex:wc,shadowmap_vertex:Uc,shadowmask_pars_fragment:yc,skinbase_vertex:Ic,skinning_pars_vertex:Nc,skinning_vertex:Oc,skinnormal_vertex:Fc,specularmap_fragment:Bc,specularmap_pars_fragment:Gc,tonemapping_fragment:Hc,tonemapping_pars_fragment:Vc,transmission_fragment:kc,transmission_pars_fragment:zc,uv_pars_fragment:Wc,uv_pars_vertex:Xc,uv_vertex:Yc,worldpos_vertex:Kc,background_vert:qc,background_frag:Zc,backgroundCube_vert:$c,backgroundCube_frag:jc,cube_vert:Qc,cube_frag:Jc,depth_vert:el,depth_frag:tl,distanceRGBA_vert:nl,distanceRGBA_frag:il,equirect_vert:al,equirect_frag:rl,linedashed_vert:ol,linedashed_frag:sl,meshbasic_vert:cl,meshbasic_frag:ll,meshlambert_vert:fl,meshlambert_frag:dl,meshmatcap_vert:ul,meshmatcap_frag:pl,meshnormal_vert:hl,meshnormal_frag:ml,meshphong_vert:_l,meshphong_frag:gl,meshphysical_vert:vl,meshphysical_frag:El,meshtoon_vert:Sl,meshtoon_frag:Ml,points_vert:Tl,points_frag:xl,shadow_vert:Al,shadow_frag:Rl,sprite_vert:bl,sprite_frag:Cl},ie={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},xt={basic:{uniforms:pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:pt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:pt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:pt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:pt([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:pt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:pt([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:pt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:pt([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:pt([ie.common,ie.displacementmap,{referencePosition:{value:new Ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:pt([ie.lights,ie.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};xt.physical={uniforms:pt([xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const hn={r:0,b:0,g:0},Ut=new za,Pl=new on;function Dl(e,n,t,i,o,r,u){const f=new $e(0);let T=r===!0?0:1,v,P,m=null,E=0,A=null;function B(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?t:n).get(_)),_}function L(S){let _=!1;const w=B(S);w===null?a(f,T):w&&w.isColor&&(a(w,1),_=!0);const x=e.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,u):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function l(S,_){const w=B(_);w&&(w.isCubeTexture||w.mapping===bn)?(P===void 0&&(P=new mt(new ka(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Yi(xt.backgroundCube.uniforms),vertexShader:xt.backgroundCube.vertexShader,fragmentShader:xt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),P.geometry.deleteAttribute("normal"),P.geometry.deleteAttribute("uv"),P.onBeforeRender=function(x,U,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(P.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(P)),Ut.copy(_.backgroundRotation),Ut.x*=-1,Ut.y*=-1,Ut.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ut.y*=-1,Ut.z*=-1),P.material.uniforms.envMap.value=w,P.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,P.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,P.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,P.material.uniforms.backgroundRotation.value.setFromMatrix4(Pl.makeRotationFromEuler(Ut)),P.material.toneMapped=rt.getTransfer(w.colorSpace)!==Qe,(m!==w||E!==w.version||A!==e.toneMapping)&&(P.material.needsUpdate=!0,m=w,E=w.version,A=e.toneMapping),P.layers.enableAll(),S.unshift(P,P.geometry,P.material,0,0,null)):w&&w.isTexture&&(v===void 0&&(v=new mt(new Na(2,2),new Ht({name:"BackgroundMaterial",uniforms:Yi(xt.background.uniforms),vertexShader:xt.background.vertexShader,fragmentShader:xt.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),Object.defineProperty(v.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(v)),v.material.uniforms.t2D.value=w,v.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,v.material.toneMapped=rt.getTransfer(w.colorSpace)!==Qe,w.matrixAutoUpdate===!0&&w.updateMatrix(),v.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||E!==w.version||A!==e.toneMapping)&&(v.material.needsUpdate=!0,m=w,E=w.version,A=e.toneMapping),v.layers.enableAll(),S.unshift(v,v.geometry,v.material,0,0,null))}function a(S,_){S.getRGB(hn,Va(e)),i.buffers.color.setClear(hn.r,hn.g,hn.b,_,u)}function b(){P!==void 0&&(P.geometry.dispose(),P.material.dispose(),P=void 0),v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0)}return{getClearColor:function(){return f},setClearColor:function(S,_=1){f.set(S),T=_,a(f,T)},getClearAlpha:function(){return T},setClearAlpha:function(S){T=S,a(f,T)},render:L,addToRenderList:l,dispose:b}}function Ll(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},o=E(null);let r=o,u=!1;function f(d,R,F,W,Y){let I=!1;const G=m(W,F,R);r!==G&&(r=G,v(r.object)),I=A(d,W,F,Y),I&&B(d,W,F,Y),Y!==null&&n.update(Y,e.ELEMENT_ARRAY_BUFFER),(I||u)&&(u=!1,_(d,R,F,W),Y!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(Y).buffer))}function T(){return e.createVertexArray()}function v(d){return e.bindVertexArray(d)}function P(d){return e.deleteVertexArray(d)}function m(d,R,F){const W=F.wireframe===!0;let Y=i[d.id];Y===void 0&&(Y={},i[d.id]=Y);let I=Y[R.id];I===void 0&&(I={},Y[R.id]=I);let G=I[W];return G===void 0&&(G=E(T()),I[W]=G),G}function E(d){const R=[],F=[],W=[];for(let Y=0;Y<t;Y++)R[Y]=0,F[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:W,object:d,attributes:{},index:null}}function A(d,R,F,W){const Y=r.attributes,I=R.attributes;let G=0;const $=F.getAttributes();for(const H in $)if($[H].location>=0){const Se=Y[H];let De=I[H];if(De===void 0&&(H==="instanceMatrix"&&d.instanceMatrix&&(De=d.instanceMatrix),H==="instanceColor"&&d.instanceColor&&(De=d.instanceColor)),Se===void 0||Se.attribute!==De||De&&Se.data!==De.data)return!0;G++}return r.attributesNum!==G||r.index!==W}function B(d,R,F,W){const Y={},I=R.attributes;let G=0;const $=F.getAttributes();for(const H in $)if($[H].location>=0){let Se=I[H];Se===void 0&&(H==="instanceMatrix"&&d.instanceMatrix&&(Se=d.instanceMatrix),H==="instanceColor"&&d.instanceColor&&(Se=d.instanceColor));const De={};De.attribute=Se,Se&&Se.data&&(De.data=Se.data),Y[H]=De,G++}r.attributes=Y,r.attributesNum=G,r.index=W}function L(){const d=r.newAttributes;for(let R=0,F=d.length;R<F;R++)d[R]=0}function l(d){a(d,0)}function a(d,R){const F=r.newAttributes,W=r.enabledAttributes,Y=r.attributeDivisors;F[d]=1,W[d]===0&&(e.enableVertexAttribArray(d),W[d]=1),Y[d]!==R&&(e.vertexAttribDivisor(d,R),Y[d]=R)}function b(){const d=r.newAttributes,R=r.enabledAttributes;for(let F=0,W=R.length;F<W;F++)R[F]!==d[F]&&(e.disableVertexAttribArray(F),R[F]=0)}function S(d,R,F,W,Y,I,G){G===!0?e.vertexAttribIPointer(d,R,F,Y,I):e.vertexAttribPointer(d,R,F,W,Y,I)}function _(d,R,F,W){L();const Y=W.attributes,I=F.getAttributes(),G=R.defaultAttributeValues;for(const $ in I){const H=I[$];if(H.location>=0){let le=Y[$];if(le===void 0&&($==="instanceMatrix"&&d.instanceMatrix&&(le=d.instanceMatrix),$==="instanceColor"&&d.instanceColor&&(le=d.instanceColor)),le!==void 0){const Se=le.normalized,De=le.itemSize,Ue=n.get(le);if(Ue===void 0)continue;const ke=Ue.buffer,Ye=Ue.type,Ve=Ue.bytesPerElement,X=Ye===e.INT||Ye===e.UNSIGNED_INT||le.gpuType===Oa;if(le.isInterleavedBufferAttribute){const q=le.data,se=q.stride,Me=le.offset;if(q.isInstancedInterleavedBuffer){for(let pe=0;pe<H.locationSize;pe++)a(H.location+pe,q.meshPerAttribute);d.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pe=0;pe<H.locationSize;pe++)l(H.location+pe);e.bindBuffer(e.ARRAY_BUFFER,ke);for(let pe=0;pe<H.locationSize;pe++)S(H.location+pe,De/H.locationSize,Ye,Se,se*Ve,(Me+De/H.locationSize*pe)*Ve,X)}else{if(le.isInstancedBufferAttribute){for(let q=0;q<H.locationSize;q++)a(H.location+q,le.meshPerAttribute);d.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let q=0;q<H.locationSize;q++)l(H.location+q);e.bindBuffer(e.ARRAY_BUFFER,ke);for(let q=0;q<H.locationSize;q++)S(H.location+q,De/H.locationSize,Ye,Se,De*Ve,De/H.locationSize*q*Ve,X)}}else if(G!==void 0){const Se=G[$];if(Se!==void 0)switch(Se.length){case 2:e.vertexAttrib2fv(H.location,Se);break;case 3:e.vertexAttrib3fv(H.location,Se);break;case 4:e.vertexAttrib4fv(H.location,Se);break;default:e.vertexAttrib1fv(H.location,Se)}}}}b()}function w(){V();for(const d in i){const R=i[d];for(const F in R){const W=R[F];for(const Y in W)P(W[Y].object),delete W[Y];delete R[F]}delete i[d]}}function x(d){if(i[d.id]===void 0)return;const R=i[d.id];for(const F in R){const W=R[F];for(const Y in W)P(W[Y].object),delete W[Y];delete R[F]}delete i[d.id]}function U(d){for(const R in i){const F=i[R];if(F[d.id]===void 0)continue;const W=F[d.id];for(const Y in W)P(W[Y].object),delete W[Y];delete F[d.id]}}function V(){p(),u=!0,r!==o&&(r=o,v(r.object))}function p(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:V,resetDefaultState:p,dispose:w,releaseStatesOfGeometry:x,releaseStatesOfProgram:U,initAttributes:L,enableAttribute:l,disableUnusedAttributes:b}}function wl(e,n,t){let i;function o(v){i=v}function r(v,P){e.drawArrays(i,v,P),t.update(P,i,1)}function u(v,P,m){m!==0&&(e.drawArraysInstanced(i,v,P,m),t.update(P,i,m))}function f(v,P,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,v,0,P,0,m);let A=0;for(let B=0;B<m;B++)A+=P[B];t.update(A,i,1)}function T(v,P,m,E){if(m===0)return;const A=n.get("WEBGL_multi_draw");if(A===null)for(let B=0;B<v.length;B++)u(v[B],P[B],E[B]);else{A.multiDrawArraysInstancedWEBGL(i,v,0,P,0,E,0,m);let B=0;for(let L=0;L<m;L++)B+=P[L]*E[L];t.update(B,i,1)}}this.setMode=o,this.render=r,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=T}function Ul(e,n,t,i){let o;function r(){if(o!==void 0)return o;if(n.has("EXT_texture_filter_anisotropic")===!0){const U=n.get("EXT_texture_filter_anisotropic");o=e.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Ct&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const V=U===An&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(U!==Gt&&i.convert(U)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Ft&&!V)}function T(U){if(U==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let v=t.precision!==void 0?t.precision:"highp";const P=T(v);P!==v&&(console.warn("THREE.WebGLRenderer:",v,"not supported, using",P,"instead."),v=P);const m=t.logarithmicDepthBuffer===!0,E=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),A=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),B=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),a=e.getParameter(e.MAX_VERTEX_ATTRIBS),b=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=B>0,x=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:T,textureFormatReadable:u,textureTypeReadable:f,precision:v,logarithmicDepthBuffer:m,reversedDepthBuffer:E,maxTextures:A,maxVertexTextures:B,maxTextureSize:L,maxCubemapSize:l,maxAttributes:a,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:w,maxSamples:x}}function yl(e){const n=this;let t=null,i=0,o=!1,r=!1;const u=new La,f=new Ge,T={value:null,needsUpdate:!1};this.uniform=T,this.numPlanes=0,this.numIntersection=0,this.init=function(m,E){const A=m.length!==0||E||i!==0||o;return o=E,i=m.length,A},this.beginShadows=function(){r=!0,P(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,E){t=P(m,E,0)},this.setState=function(m,E,A){const B=m.clippingPlanes,L=m.clipIntersection,l=m.clipShadows,a=e.get(m);if(!o||B===null||B.length===0||r&&!l)r?P(null):v();else{const b=r?0:i,S=b*4;let _=a.clippingState||null;T.value=_,_=P(B,E,S,A);for(let w=0;w!==S;++w)_[w]=t[w];a.clippingState=_,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=b}};function v(){T.value!==t&&(T.value=t,T.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function P(m,E,A,B){const L=m!==null?m.length:0;let l=null;if(L!==0){if(l=T.value,B!==!0||l===null){const a=A+L*4,b=E.matrixWorldInverse;f.getNormalMatrix(b),(l===null||l.length<a)&&(l=new Float32Array(a));for(let S=0,_=A;S!==L;++S,_+=4)u.copy(m[S]).applyMatrix4(b,f),u.normal.toArray(l,_),l[_+3]=u.constant}T.value=l,T.needsUpdate=!0}return n.numPlanes=L,n.numIntersection=0,l}}function Il(e){let n=new WeakMap;function t(u,f){return f===ei?u.mapping=fn:f===ti&&(u.mapping=$t),u}function i(u){if(u&&u.isTexture){const f=u.mapping;if(f===ei||f===ti)if(n.has(u)){const T=n.get(u).texture;return t(T,u.mapping)}else{const T=u.image;if(T&&T.height>0){const v=new Jr(T.height);return v.fromEquirectangularTexture(e,u),n.set(u,v),u.addEventListener("dispose",o),t(v.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const T=n.get(f);T!==void 0&&(n.delete(f),T.dispose())}function r(){n=new WeakMap}return{get:i,dispose:r}}const Yt=4,Ji=[.125,.215,.35,.446,.526,.582],Ot=20,Gn=new io,ea=new $e;let Hn=null,Vn=0,kn=0,zn=!1;const Nt=(1+Math.sqrt(5))/2,kt=1/Nt,ta=[new Ne(-Nt,kt,0),new Ne(Nt,kt,0),new Ne(-kt,0,Nt),new Ne(kt,0,Nt),new Ne(0,Nt,-kt),new Ne(0,Nt,kt),new Ne(-1,1,-1),new Ne(1,1,-1),new Ne(-1,1,1),new Ne(1,1,1)],Nl=new Ne;class na{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,o=100,r={}){const{size:u=256,position:f=Nl}=r;Hn=this._renderer.getRenderTarget(),Vn=this._renderer.getActiveCubeFace(),kn=this._renderer.getActiveMipmapLevel(),zn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const T=this._allocateTargets();return T.depthBuffer=!0,this._sceneToCubeUV(n,i,o,T,f),t>0&&this._blur(T,0,0,t),this._applyPMREM(T),this._cleanup(T),T}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ra(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=aa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Hn,Vn,kn),this._renderer.xr.enabled=zn,n.scissorTest=!1,mn(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===fn||n.mapping===$t?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Hn=this._renderer.getRenderTarget(),Vn=this._renderer.getActiveCubeFace(),kn=this._renderer.getActiveMipmapLevel(),zn=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:An,format:Ct,colorSpace:Rn,depthBuffer:!1},o=ia(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ia(n,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ol(r)),this._blurMaterial=Fl(r,n,t)}return o}_compileMaterial(n){const t=new mt(this._lodPlanes[0],n);this._renderer.compile(t,Gn)}_sceneToCubeUV(n,t,i,o,r){const T=new nn(90,1,t,i),v=[1,-1,1,1,1,1],P=[1,1,1,-1,-1,-1],m=this._renderer,E=m.autoClear,A=m.toneMapping;m.getClearColor(ea),m.toneMapping=Dt,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(o),m.clearDepth(),m.setRenderTarget(null));const L=new xn({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),l=new mt(new ka,L);let a=!1;const b=n.background;b?b.isColor&&(L.color.copy(b),n.background=null,a=!0):(L.color.copy(ea),a=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(T.up.set(0,v[S],0),T.position.set(r.x,r.y,r.z),T.lookAt(r.x+P[S],r.y,r.z)):_===1?(T.up.set(0,0,v[S]),T.position.set(r.x,r.y,r.z),T.lookAt(r.x,r.y+P[S],r.z)):(T.up.set(0,v[S],0),T.position.set(r.x,r.y,r.z),T.lookAt(r.x,r.y,r.z+P[S]));const w=this._cubeSize;mn(o,_*w,S>2?w:0,w,w),m.setRenderTarget(o),a&&m.render(l,T),m.render(n,T)}l.geometry.dispose(),l.material.dispose(),m.toneMapping=A,m.autoClear=E,n.background=b}_textureToCubeUV(n,t){const i=this._renderer,o=n.mapping===fn||n.mapping===$t;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ra()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=aa());const r=o?this._cubemapMaterial:this._equirectMaterial,u=new mt(this._lodPlanes[0],r),f=r.uniforms;f.envMap.value=n;const T=this._cubeSize;mn(t,0,0,3*T,2*T),i.setRenderTarget(t),i.render(u,Gn)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let r=1;r<o;r++){const u=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),f=ta[(o-r-1)%ta.length];this._blur(n,r-1,r,u,f)}t.autoClear=i}_blur(n,t,i,o,r){const u=this._pingPongRenderTarget;this._halfBlur(n,u,t,i,o,"latitudinal",r),this._halfBlur(u,n,i,i,o,"longitudinal",r)}_halfBlur(n,t,i,o,r,u,f){const T=this._renderer,v=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const P=3,m=new mt(this._lodPlanes[o],v),E=v.uniforms,A=this._sizeLods[i]-1,B=isFinite(r)?Math.PI/(2*A):2*Math.PI/(2*Ot-1),L=r/B,l=isFinite(r)?1+Math.floor(P*L):Ot;l>Ot&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${Ot}`);const a=[];let b=0;for(let U=0;U<Ot;++U){const V=U/L,p=Math.exp(-V*V/2);a.push(p),U===0?b+=p:U<l&&(b+=2*p)}for(let U=0;U<a.length;U++)a[U]=a[U]/b;E.envMap.value=n.texture,E.samples.value=l,E.weights.value=a,E.latitudinal.value=u==="latitudinal",f&&(E.poleAxis.value=f);const{_lodMax:S}=this;E.dTheta.value=B,E.mipInt.value=S-i;const _=this._sizeLods[o],w=3*_*(o>S-Yt?o-S+Yt:0),x=4*(this._cubeSize-_);mn(t,w,x,3*_,2*_),T.setRenderTarget(t),T.render(m,Gn)}}function Ol(e){const n=[],t=[],i=[];let o=e;const r=e-Yt+1+Ji.length;for(let u=0;u<r;u++){const f=Math.pow(2,o);t.push(f);let T=1/f;u>e-Yt?T=Ji[u-e+Yt-1]:u===0&&(T=0),i.push(T);const v=1/(f-2),P=-v,m=1+v,E=[P,P,m,P,m,m,P,P,m,m,P,m],A=6,B=6,L=3,l=2,a=1,b=new Float32Array(L*B*A),S=new Float32Array(l*B*A),_=new Float32Array(a*B*A);for(let x=0;x<A;x++){const U=x%3*2/3-1,V=x>2?0:-1,p=[U,V,0,U+2/3,V,0,U+2/3,V+1,0,U,V,0,U+2/3,V+1,0,U,V+1,0];b.set(p,L*B*x),S.set(E,l*B*x);const d=[x,x,x,x,x,x];_.set(d,a*B*x)}const w=new Kt;w.setAttribute("position",new rn(b,L)),w.setAttribute("uv",new rn(S,l)),w.setAttribute("faceIndex",new rn(_,a)),n.push(w),o>Yt&&o--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function ia(e,n,t){const i=new Zt(e,n,t);return i.texture.mapping=bn,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mn(e,n,t,i,o){e.viewport.set(n,t,i,o),e.scissor.set(n,t,i,o)}function Fl(e,n,t){const i=new Float32Array(Ot),o=new Ne(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Ot,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function aa(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function ra(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bt,depthTest:!1,depthWrite:!1})}function oi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bl(e){let n=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const T=f.mapping,v=T===ei||T===ti,P=T===fn||T===$t;if(v||P){let m=n.get(f);const E=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==E)return t===null&&(t=new na(e)),m=v?t.fromEquirectangular(f,m):t.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const A=f.image;return v&&A&&A.height>0||P&&A&&o(A)?(t===null&&(t=new na(e)),m=v?t.fromEquirectangular(f):t.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",r),m.texture):null}}}return f}function o(f){let T=0;const v=6;for(let P=0;P<v;P++)f[P]!==void 0&&T++;return T===v}function r(f){const T=f.target;T.removeEventListener("dispose",r);const v=n.get(T);v!==void 0&&(n.delete(T),v.dispose())}function u(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function Gl(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let o;switch(i){case"WEBGL_depth_texture":o=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=e.getExtension(i)}return n[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Yn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function Hl(e,n,t,i){const o={},r=new WeakMap;function u(m){const E=m.target;E.index!==null&&n.remove(E.index);for(const B in E.attributes)n.remove(E.attributes[B]);E.removeEventListener("dispose",u),delete o[E.id];const A=r.get(E);A&&(n.remove(A),r.delete(E)),i.releaseStatesOfGeometry(E),E.isInstancedBufferGeometry===!0&&delete E._maxInstanceCount,t.memory.geometries--}function f(m,E){return o[E.id]===!0||(E.addEventListener("dispose",u),o[E.id]=!0,t.memory.geometries++),E}function T(m){const E=m.attributes;for(const A in E)n.update(E[A],e.ARRAY_BUFFER)}function v(m){const E=[],A=m.index,B=m.attributes.position;let L=0;if(A!==null){const b=A.array;L=A.version;for(let S=0,_=b.length;S<_;S+=3){const w=b[S+0],x=b[S+1],U=b[S+2];E.push(w,x,x,U,U,w)}}else if(B!==void 0){const b=B.array;L=B.version;for(let S=0,_=b.length/3-1;S<_;S+=3){const w=S+0,x=S+1,U=S+2;E.push(w,x,x,U,U,w)}}else return;const l=new(oo(E)?ao:ro)(E,1);l.version=L;const a=r.get(m);a&&n.remove(a),r.set(m,l)}function P(m){const E=r.get(m);if(E){const A=m.index;A!==null&&E.version<A.version&&v(m)}else v(m);return r.get(m)}return{get:f,update:T,getWireframeAttribute:P}}function Vl(e,n,t){let i;function o(E){i=E}let r,u;function f(E){r=E.type,u=E.bytesPerElement}function T(E,A){e.drawElements(i,A,r,E*u),t.update(A,i,1)}function v(E,A,B){B!==0&&(e.drawElementsInstanced(i,A,r,E*u,B),t.update(A,i,B))}function P(E,A,B){if(B===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,A,0,r,E,0,B);let l=0;for(let a=0;a<B;a++)l+=A[a];t.update(l,i,1)}function m(E,A,B,L){if(B===0)return;const l=n.get("WEBGL_multi_draw");if(l===null)for(let a=0;a<E.length;a++)v(E[a]/u,A[a],L[a]);else{l.multiDrawElementsInstancedWEBGL(i,A,0,r,E,0,L,0,B);let a=0;for(let b=0;b<B;b++)a+=A[b]*L[b];t.update(a,i,1)}}this.setMode=o,this.setIndex=f,this.render=T,this.renderInstances=v,this.renderMultiDraw=P,this.renderMultiDrawInstances=m}function kl(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,u,f){switch(t.calls++,u){case e.TRIANGLES:t.triangles+=f*(r/3);break;case e.LINES:t.lines+=f*(r/2);break;case e.LINE_STRIP:t.lines+=f*(r-1);break;case e.LINE_LOOP:t.lines+=f*r;break;case e.POINTS:t.points+=f*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:o,update:i}}function zl(e,n,t){const i=new WeakMap,o=new ht;function r(u,f,T){const v=u.morphTargetInfluences,P=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,m=P!==void 0?P.length:0;let E=i.get(f);if(E===void 0||E.count!==m){let p=function(){U.dispose(),i.delete(f),f.removeEventListener("dispose",p)};E!==void 0&&E.texture.dispose();const A=f.morphAttributes.position!==void 0,B=f.morphAttributes.normal!==void 0,L=f.morphAttributes.color!==void 0,l=f.morphAttributes.position||[],a=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let S=0;A===!0&&(S=1),B===!0&&(S=2),L===!0&&(S=3);let _=f.attributes.position.count*S,w=1;_>n.maxTextureSize&&(w=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);const x=new Float32Array(_*w*4*m),U=new Ha(x,_,w,m);U.type=Ft,U.needsUpdate=!0;const V=S*4;for(let d=0;d<m;d++){const R=l[d],F=a[d],W=b[d],Y=_*w*4*d;for(let I=0;I<R.count;I++){const G=I*V;A===!0&&(o.fromBufferAttribute(R,I),x[Y+G+0]=o.x,x[Y+G+1]=o.y,x[Y+G+2]=o.z,x[Y+G+3]=0),B===!0&&(o.fromBufferAttribute(F,I),x[Y+G+4]=o.x,x[Y+G+5]=o.y,x[Y+G+6]=o.z,x[Y+G+7]=0),L===!0&&(o.fromBufferAttribute(W,I),x[Y+G+8]=o.x,x[Y+G+9]=o.y,x[Y+G+10]=o.z,x[Y+G+11]=W.itemSize===4?o.w:1)}}E={count:m,texture:U,size:new Ze(_,w)},i.set(f,E),f.addEventListener("dispose",p)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)T.getUniforms().setValue(e,"morphTexture",u.morphTexture,t);else{let A=0;for(let L=0;L<v.length;L++)A+=v[L];const B=f.morphTargetsRelative?1:1-A;T.getUniforms().setValue(e,"morphTargetBaseInfluence",B),T.getUniforms().setValue(e,"morphTargetInfluences",v)}T.getUniforms().setValue(e,"morphTargetsTexture",E.texture,t),T.getUniforms().setValue(e,"morphTargetsTextureSize",E.size)}return{update:r}}function Wl(e,n,t,i){let o=new WeakMap;function r(T){const v=i.render.frame,P=T.geometry,m=n.get(T,P);if(o.get(m)!==v&&(n.update(m),o.set(m,v)),T.isInstancedMesh&&(T.hasEventListener("dispose",f)===!1&&T.addEventListener("dispose",f),o.get(T)!==v&&(t.update(T.instanceMatrix,e.ARRAY_BUFFER),T.instanceColor!==null&&t.update(T.instanceColor,e.ARRAY_BUFFER),o.set(T,v))),T.isSkinnedMesh){const E=T.skeleton;o.get(E)!==v&&(E.update(),o.set(E,v))}return m}function u(){o=new WeakMap}function f(T){const v=T.target;v.removeEventListener("dispose",f),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:r,dispose:u}}const qa=new Eo,oa=new Pa(1,1),Za=new Ha,$a=new vo,ja=new go,sa=[],ca=[],la=new Float32Array(16),fa=new Float32Array(9),da=new Float32Array(4);function jt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const o=n*t;let r=sa[o];if(r===void 0&&(r=new Float32Array(o),sa[o]=r),n!==0){i.toArray(r,0);for(let u=1,f=0;u!==n;++u)f+=t,e[u].toArray(r,f)}return r}function st(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function ct(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Cn(e,n){let t=ca[n];t===void 0&&(t=new Int32Array(n),ca[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Xl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Yl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(st(t,n))return;e.uniform2fv(this.addr,n),ct(t,n)}}function Kl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(st(t,n))return;e.uniform3fv(this.addr,n),ct(t,n)}}function ql(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(st(t,n))return;e.uniform4fv(this.addr,n),ct(t,n)}}function Zl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(st(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),ct(t,n)}else{if(st(t,i))return;da.set(i),e.uniformMatrix2fv(this.addr,!1,da),ct(t,i)}}function $l(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(st(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),ct(t,n)}else{if(st(t,i))return;fa.set(i),e.uniformMatrix3fv(this.addr,!1,fa),ct(t,i)}}function jl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(st(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),ct(t,n)}else{if(st(t,i))return;la.set(i),e.uniformMatrix4fv(this.addr,!1,la),ct(t,i)}}function Ql(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Jl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(st(t,n))return;e.uniform2iv(this.addr,n),ct(t,n)}}function ef(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(st(t,n))return;e.uniform3iv(this.addr,n),ct(t,n)}}function tf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(st(t,n))return;e.uniform4iv(this.addr,n),ct(t,n)}}function nf(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function af(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(st(t,n))return;e.uniform2uiv(this.addr,n),ct(t,n)}}function rf(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(st(t,n))return;e.uniform3uiv(this.addr,n),ct(t,n)}}function of(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(st(t,n))return;e.uniform4uiv(this.addr,n),ct(t,n)}}function sf(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o);let r;this.type===e.SAMPLER_2D_SHADOW?(oa.compareFunction=Da,r=oa):r=qa,t.setTexture2D(n||r,o)}function cf(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(n||$a,o)}function lf(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(n||ja,o)}function ff(e,n,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(e.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(n||Za,o)}function df(e){switch(e){case 5126:return Xl;case 35664:return Yl;case 35665:return Kl;case 35666:return ql;case 35674:return Zl;case 35675:return $l;case 35676:return jl;case 5124:case 35670:return Ql;case 35667:case 35671:return Jl;case 35668:case 35672:return ef;case 35669:case 35673:return tf;case 5125:return nf;case 36294:return af;case 36295:return rf;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return ff}}function uf(e,n){e.uniform1fv(this.addr,n)}function pf(e,n){const t=jt(n,this.size,2);e.uniform2fv(this.addr,t)}function hf(e,n){const t=jt(n,this.size,3);e.uniform3fv(this.addr,t)}function mf(e,n){const t=jt(n,this.size,4);e.uniform4fv(this.addr,t)}function _f(e,n){const t=jt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function gf(e,n){const t=jt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function vf(e,n){const t=jt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Ef(e,n){e.uniform1iv(this.addr,n)}function Sf(e,n){e.uniform2iv(this.addr,n)}function Mf(e,n){e.uniform3iv(this.addr,n)}function Tf(e,n){e.uniform4iv(this.addr,n)}function xf(e,n){e.uniform1uiv(this.addr,n)}function Af(e,n){e.uniform2uiv(this.addr,n)}function Rf(e,n){e.uniform3uiv(this.addr,n)}function bf(e,n){e.uniform4uiv(this.addr,n)}function Cf(e,n,t){const i=this.cache,o=n.length,r=Cn(t,o);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let u=0;u!==o;++u)t.setTexture2D(n[u]||qa,r[u])}function Pf(e,n,t){const i=this.cache,o=n.length,r=Cn(t,o);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let u=0;u!==o;++u)t.setTexture3D(n[u]||$a,r[u])}function Df(e,n,t){const i=this.cache,o=n.length,r=Cn(t,o);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let u=0;u!==o;++u)t.setTextureCube(n[u]||ja,r[u])}function Lf(e,n,t){const i=this.cache,o=n.length,r=Cn(t,o);st(i,r)||(e.uniform1iv(this.addr,r),ct(i,r));for(let u=0;u!==o;++u)t.setTexture2DArray(n[u]||Za,r[u])}function wf(e){switch(e){case 5126:return uf;case 35664:return pf;case 35665:return hf;case 35666:return mf;case 35674:return _f;case 35675:return gf;case 35676:return vf;case 5124:case 35670:return Ef;case 35667:case 35671:return Sf;case 35668:case 35672:return Mf;case 35669:case 35673:return Tf;case 5125:return xf;case 36294:return Af;case 36295:return Rf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Cf;case 35679:case 36299:case 36307:return Pf;case 35680:case 36300:case 36308:case 36293:return Df;case 36289:case 36303:case 36311:case 36292:return Lf}}class Uf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=df(t.type)}}class yf{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wf(t.type)}}class If{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const o=this.seq;for(let r=0,u=o.length;r!==u;++r){const f=o[r];f.setValue(n,t[f.id],i)}}}const Wn=/(\w+)(\])?(\[|\.)?/g;function ua(e,n){e.seq.push(n),e.map[n.id]=n}function Nf(e,n,t){const i=e.name,o=i.length;for(Wn.lastIndex=0;;){const r=Wn.exec(i),u=Wn.lastIndex;let f=r[1];const T=r[2]==="]",v=r[3];if(T&&(f=f|0),v===void 0||v==="["&&u+2===o){ua(t,v===void 0?new Uf(f,e,n):new yf(f,e,n));break}else{let m=t.map[f];m===void 0&&(m=new If(f),ua(t,m)),t=m}}}class En{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const r=n.getActiveUniform(t,o),u=n.getUniformLocation(t,r.name);Nf(r,u,this)}}setValue(n,t,i,o){const r=this.map[t];r!==void 0&&r.setValue(n,i,o)}setOptional(n,t,i){const o=t[i];o!==void 0&&this.setValue(n,i,o)}static upload(n,t,i,o){for(let r=0,u=t.length;r!==u;++r){const f=t[r],T=i[f.id];T.needsUpdate!==!1&&f.setValue(n,T.value,o)}}static seqWithValue(n,t){const i=[];for(let o=0,r=n.length;o!==r;++o){const u=n[o];u.id in t&&i.push(u)}return i}}function pa(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Of=37297;let Ff=0;function Bf(e,n){const t=e.split(`
`),i=[],o=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let u=o;u<r;u++){const f=u+1;i.push(`${f===n?">":" "} ${f}: ${t[u]}`)}return i.join(`
`)}const ha=new Ge;function Gf(e){rt._getMatrix(ha,rt.workingColorSpace,e);const n=`mat3( ${ha.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(e)){case Wa:return[n,"LinearTransferOETF"];case Qe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function ma(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const u=/ERROR: 0:(\d+)/.exec(r);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+r+`

`+Bf(e.getShaderSource(n),f)}else return r}function Hf(e,n){const t=Gf(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vf(e,n){let t;switch(n){case _o:t="Linear";break;case mo:t="Reinhard";break;case ho:t="Cineon";break;case po:t="ACESFilmic";break;case uo:t="AgX";break;case fo:t="Neutral";break;case lo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _n=new Ne;function kf(){rt.getLuminanceCoefficients(_n);const e=_n.x.toFixed(4),n=_n.y.toFixed(4),t=_n.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zf(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tn).join(`
`)}function Wf(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Xf(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const r=e.getActiveAttrib(n,o),u=r.name;let f=1;r.type===e.FLOAT_MAT2&&(f=2),r.type===e.FLOAT_MAT3&&(f=3),r.type===e.FLOAT_MAT4&&(f=4),t[u]={type:r.type,location:e.getAttribLocation(n,u),locationSize:f}}return t}function tn(e){return e!==""}function _a(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function ga(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ii(e){return e.replace(Yf,qf)}const Kf=new Map;function qf(e,n){let t=Ie[n];if(t===void 0){const i=Kf.get(n);if(i!==void 0)t=Ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return ii(t)}const Zf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function va(e){return e.replace(Zf,$f)}function $f(e,n,t,i){let o="";for(let r=parseInt(n);r<parseInt(t);r++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function Ea(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function jf(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===wa?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===co?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Rt&&(n="SHADOWMAP_TYPE_VSM"),n}function Qf(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case fn:case $t:n="ENVMAP_TYPE_CUBE";break;case bn:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Jf(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case $t:n="ENVMAP_MODE_REFRACTION";break}return n}function ed(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case xo:n="ENVMAP_BLENDING_MULTIPLY";break;case To:n="ENVMAP_BLENDING_MIX";break;case Mo:n="ENVMAP_BLENDING_ADD";break}return n}function td(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function nd(e,n,t,i){const o=e.getContext(),r=t.defines;let u=t.vertexShader,f=t.fragmentShader;const T=jf(t),v=Qf(t),P=Jf(t),m=ed(t),E=td(t),A=zf(t),B=Wf(r),L=o.createProgram();let l,a,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B].filter(tn).join(`
`),l.length>0&&(l+=`
`),a=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B].filter(tn).join(`
`),a.length>0&&(a+=`
`)):(l=[Ea(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+P:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+T:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tn).join(`
`),a=[Ea(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,B,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.envMap?"#define "+P:"",t.envMap?"#define "+m:"",E?"#define CUBEUV_TEXEL_WIDTH "+E.texelWidth:"",E?"#define CUBEUV_TEXEL_HEIGHT "+E.texelHeight:"",E?"#define CUBEUV_MAX_MIP "+E.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+T:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dt?"#define TONE_MAPPING":"",t.toneMapping!==Dt?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Dt?Vf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Hf("linearToOutputTexel",t.outputColorSpace),kf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tn).join(`
`)),u=ii(u),u=_a(u,t),u=ga(u,t),f=ii(f),f=_a(f,t),f=ga(f,t),u=va(u),f=va(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,l=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,a=["#define varying in",t.glslVersion===qi?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+a);const S=b+l+u,_=b+a+f,w=pa(o,o.VERTEX_SHADER,S),x=pa(o,o.FRAGMENT_SHADER,_);o.attachShader(L,w),o.attachShader(L,x),t.index0AttributeName!==void 0?o.bindAttribLocation(L,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(L,0,"position"),o.linkProgram(L);function U(R){if(e.debug.checkShaderErrors){const F=o.getProgramInfoLog(L)||"",W=o.getShaderInfoLog(w)||"",Y=o.getShaderInfoLog(x)||"",I=F.trim(),G=W.trim(),$=Y.trim();let H=!0,le=!0;if(o.getProgramParameter(L,o.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(o,L,w,x);else{const Se=ma(o,w,"vertex"),De=ma(o,x,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(L,o.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+Se+`
`+De)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(G===""||$==="")&&(le=!1);le&&(R.diagnostics={runnable:H,programLog:I,vertexShader:{log:G,prefix:l},fragmentShader:{log:$,prefix:a}})}o.deleteShader(w),o.deleteShader(x),V=new En(o,L),p=Xf(o,L)}let V;this.getUniforms=function(){return V===void 0&&U(this),V};let p;this.getAttributes=function(){return p===void 0&&U(this),p};let d=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=o.getProgramParameter(L,Of)),d},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ff++,this.cacheKey=n,this.usedTimes=1,this.program=L,this.vertexShader=w,this.fragmentShader=x,this}let id=0;class ad{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,o=this._getShaderStage(t),r=this._getShaderStage(i),u=this._getShaderCacheForMaterial(n);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(r)===!1&&(u.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new rd(n),t.set(n,i)),i}}class rd{constructor(n){this.id=id++,this.code=n,this.usedTimes=0}}function od(e,n,t,i,o,r,u){const f=new so,T=new ad,v=new Set,P=[],m=o.logarithmicDepthBuffer,E=o.vertexTextures;let A=o.precision;const B={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function L(p){return v.add(p),p===0?"uv":`uv${p}`}function l(p,d,R,F,W){const Y=F.fog,I=W.geometry,G=p.isMeshStandardMaterial?F.environment:null,$=(p.isMeshStandardMaterial?t:n).get(p.envMap||G),H=$&&$.mapping===bn?$.image.height:null,le=B[p.type];p.precision!==null&&(A=o.getMaxPrecision(p.precision),A!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",A,"instead."));const Se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,De=Se!==void 0?Se.length:0;let Ue=0;I.morphAttributes.position!==void 0&&(Ue=1),I.morphAttributes.normal!==void 0&&(Ue=2),I.morphAttributes.color!==void 0&&(Ue=3);let ke,Ye,Ve,X;if(le){const He=xt[le];ke=He.vertexShader,Ye=He.fragmentShader}else ke=p.vertexShader,Ye=p.fragmentShader,T.update(p),Ve=T.getVertexShaderID(p),X=T.getFragmentShaderID(p);const q=e.getRenderTarget(),se=e.state.buffers.depth.getReversed(),Me=W.isInstancedMesh===!0,pe=W.isBatchedMesh===!0,Oe=!!p.map,at=!!p.matcap,g=!!$,Ke=!!p.aoMap,Ae=!!p.lightMap,Re=!!p.bumpMap,he=!!p.normalMap,Je=!!p.displacementMap,me=!!p.emissiveMap,ye=!!p.metalnessMap,lt=!!p.roughnessMap,it=p.anisotropy>0,h=p.clearcoat>0,s=p.dispersion>0,y=p.iridescence>0,z=p.sheen>0,Z=p.transmission>0,k=it&&!!p.anisotropyMap,Ee=h&&!!p.clearcoatMap,te=h&&!!p.clearcoatNormalMap,_e=h&&!!p.clearcoatRoughnessMap,ge=y&&!!p.iridescenceMap,J=y&&!!p.iridescenceThicknessMap,oe=z&&!!p.sheenColorMap,Ce=z&&!!p.sheenRoughnessMap,ve=!!p.specularMap,ae=!!p.specularColorMap,we=!!p.specularIntensityMap,M=Z&&!!p.transmissionMap,ee=Z&&!!p.thicknessMap,ne=!!p.gradientMap,fe=!!p.alphaMap,j=p.alphaTest>0,K=!!p.alphaHash,ue=!!p.extensions;let Le=Dt;p.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Le=e.toneMapping);const qe={shaderID:le,shaderType:p.type,shaderName:p.name,vertexShader:ke,fragmentShader:Ye,defines:p.defines,customVertexShaderID:Ve,customFragmentShaderID:X,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:A,batching:pe,batchingColor:pe&&W._colorsTexture!==null,instancing:Me,instancingColor:Me&&W.instanceColor!==null,instancingMorph:Me&&W.morphTexture!==null,supportsVertexTextures:E,outputColorSpace:q===null?e.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Rn,alphaToCoverage:!!p.alphaToCoverage,map:Oe,matcap:at,envMap:g,envMapMode:g&&$.mapping,envMapCubeUVHeight:H,aoMap:Ke,lightMap:Ae,bumpMap:Re,normalMap:he,displacementMap:E&&Je,emissiveMap:me,normalMapObjectSpace:he&&p.normalMapType===no,normalMapTangentSpace:he&&p.normalMapType===to,metalnessMap:ye,roughnessMap:lt,anisotropy:it,anisotropyMap:k,clearcoat:h,clearcoatMap:Ee,clearcoatNormalMap:te,clearcoatRoughnessMap:_e,dispersion:s,iridescence:y,iridescenceMap:ge,iridescenceThicknessMap:J,sheen:z,sheenColorMap:oe,sheenRoughnessMap:Ce,specularMap:ve,specularColorMap:ae,specularIntensityMap:we,transmission:Z,transmissionMap:M,thicknessMap:ee,gradientMap:ne,opaque:p.transparent===!1&&p.blending===vn&&p.alphaToCoverage===!1,alphaMap:fe,alphaTest:j,alphaHash:K,combine:p.combine,mapUv:Oe&&L(p.map.channel),aoMapUv:Ke&&L(p.aoMap.channel),lightMapUv:Ae&&L(p.lightMap.channel),bumpMapUv:Re&&L(p.bumpMap.channel),normalMapUv:he&&L(p.normalMap.channel),displacementMapUv:Je&&L(p.displacementMap.channel),emissiveMapUv:me&&L(p.emissiveMap.channel),metalnessMapUv:ye&&L(p.metalnessMap.channel),roughnessMapUv:lt&&L(p.roughnessMap.channel),anisotropyMapUv:k&&L(p.anisotropyMap.channel),clearcoatMapUv:Ee&&L(p.clearcoatMap.channel),clearcoatNormalMapUv:te&&L(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&L(p.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&L(p.iridescenceMap.channel),iridescenceThicknessMapUv:J&&L(p.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&L(p.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&L(p.sheenRoughnessMap.channel),specularMapUv:ve&&L(p.specularMap.channel),specularColorMapUv:ae&&L(p.specularColorMap.channel),specularIntensityMapUv:we&&L(p.specularIntensityMap.channel),transmissionMapUv:M&&L(p.transmissionMap.channel),thicknessMapUv:ee&&L(p.thicknessMap.channel),alphaMapUv:fe&&L(p.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(he||it),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!I.attributes.uv&&(Oe||fe),fog:!!Y,useFog:p.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:p.flatShading===!0&&p.wireframe===!1,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:se,skinning:W.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:Ue,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:Oe&&p.map.isVideoTexture===!0&&rt.getTransfer(p.map.colorSpace)===Qe,decodeVideoTextureEmissive:me&&p.emissiveMap.isVideoTexture===!0&&rt.getTransfer(p.emissiveMap.colorSpace)===Qe,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===bt,flipSided:p.side===St,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:ue&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ue&&p.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return qe.vertexUv1s=v.has(1),qe.vertexUv2s=v.has(2),qe.vertexUv3s=v.has(3),v.clear(),qe}function a(p){const d=[];if(p.shaderID?d.push(p.shaderID):(d.push(p.customVertexShaderID),d.push(p.customFragmentShaderID)),p.defines!==void 0)for(const R in p.defines)d.push(R),d.push(p.defines[R]);return p.isRawShaderMaterial===!1&&(b(d,p),S(d,p),d.push(e.outputColorSpace)),d.push(p.customProgramCacheKey),d.join()}function b(p,d){p.push(d.precision),p.push(d.outputColorSpace),p.push(d.envMapMode),p.push(d.envMapCubeUVHeight),p.push(d.mapUv),p.push(d.alphaMapUv),p.push(d.lightMapUv),p.push(d.aoMapUv),p.push(d.bumpMapUv),p.push(d.normalMapUv),p.push(d.displacementMapUv),p.push(d.emissiveMapUv),p.push(d.metalnessMapUv),p.push(d.roughnessMapUv),p.push(d.anisotropyMapUv),p.push(d.clearcoatMapUv),p.push(d.clearcoatNormalMapUv),p.push(d.clearcoatRoughnessMapUv),p.push(d.iridescenceMapUv),p.push(d.iridescenceThicknessMapUv),p.push(d.sheenColorMapUv),p.push(d.sheenRoughnessMapUv),p.push(d.specularMapUv),p.push(d.specularColorMapUv),p.push(d.specularIntensityMapUv),p.push(d.transmissionMapUv),p.push(d.thicknessMapUv),p.push(d.combine),p.push(d.fogExp2),p.push(d.sizeAttenuation),p.push(d.morphTargetsCount),p.push(d.morphAttributeCount),p.push(d.numDirLights),p.push(d.numPointLights),p.push(d.numSpotLights),p.push(d.numSpotLightMaps),p.push(d.numHemiLights),p.push(d.numRectAreaLights),p.push(d.numDirLightShadows),p.push(d.numPointLightShadows),p.push(d.numSpotLightShadows),p.push(d.numSpotLightShadowsWithMaps),p.push(d.numLightProbes),p.push(d.shadowMapType),p.push(d.toneMapping),p.push(d.numClippingPlanes),p.push(d.numClipIntersection),p.push(d.depthPacking)}function S(p,d){f.disableAll(),d.supportsVertexTextures&&f.enable(0),d.instancing&&f.enable(1),d.instancingColor&&f.enable(2),d.instancingMorph&&f.enable(3),d.matcap&&f.enable(4),d.envMap&&f.enable(5),d.normalMapObjectSpace&&f.enable(6),d.normalMapTangentSpace&&f.enable(7),d.clearcoat&&f.enable(8),d.iridescence&&f.enable(9),d.alphaTest&&f.enable(10),d.vertexColors&&f.enable(11),d.vertexAlphas&&f.enable(12),d.vertexUv1s&&f.enable(13),d.vertexUv2s&&f.enable(14),d.vertexUv3s&&f.enable(15),d.vertexTangents&&f.enable(16),d.anisotropy&&f.enable(17),d.alphaHash&&f.enable(18),d.batching&&f.enable(19),d.dispersion&&f.enable(20),d.batchingColor&&f.enable(21),d.gradientMap&&f.enable(22),p.push(f.mask),f.disableAll(),d.fog&&f.enable(0),d.useFog&&f.enable(1),d.flatShading&&f.enable(2),d.logarithmicDepthBuffer&&f.enable(3),d.reversedDepthBuffer&&f.enable(4),d.skinning&&f.enable(5),d.morphTargets&&f.enable(6),d.morphNormals&&f.enable(7),d.morphColors&&f.enable(8),d.premultipliedAlpha&&f.enable(9),d.shadowMapEnabled&&f.enable(10),d.doubleSided&&f.enable(11),d.flipSided&&f.enable(12),d.useDepthPacking&&f.enable(13),d.dithering&&f.enable(14),d.transmission&&f.enable(15),d.sheen&&f.enable(16),d.opaque&&f.enable(17),d.pointsUvs&&f.enable(18),d.decodeVideoTexture&&f.enable(19),d.decodeVideoTextureEmissive&&f.enable(20),d.alphaToCoverage&&f.enable(21),p.push(f.mask)}function _(p){const d=B[p.type];let R;if(d){const F=xt[d];R=eo.clone(F.uniforms)}else R=p.uniforms;return R}function w(p,d){let R;for(let F=0,W=P.length;F<W;F++){const Y=P[F];if(Y.cacheKey===d){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new nd(e,d,p,r),P.push(R)),R}function x(p){if(--p.usedTimes===0){const d=P.indexOf(p);P[d]=P[P.length-1],P.pop(),p.destroy()}}function U(p){T.remove(p)}function V(){T.dispose()}return{getParameters:l,getProgramCacheKey:a,getUniforms:_,acquireProgram:w,releaseProgram:x,releaseShaderCache:U,programs:P,dispose:V}}function sd(){let e=new WeakMap;function n(u){return e.has(u)}function t(u){let f=e.get(u);return f===void 0&&(f={},e.set(u,f)),f}function i(u){e.delete(u)}function o(u,f,T){e.get(u)[f]=T}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:o,dispose:r}}function cd(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Sa(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Ma(){const e=[];let n=0;const t=[],i=[],o=[];function r(){n=0,t.length=0,i.length=0,o.length=0}function u(m,E,A,B,L,l){let a=e[n];return a===void 0?(a={id:m.id,object:m,geometry:E,material:A,groupOrder:B,renderOrder:m.renderOrder,z:L,group:l},e[n]=a):(a.id=m.id,a.object=m,a.geometry=E,a.material=A,a.groupOrder=B,a.renderOrder=m.renderOrder,a.z=L,a.group=l),n++,a}function f(m,E,A,B,L,l){const a=u(m,E,A,B,L,l);A.transmission>0?i.push(a):A.transparent===!0?o.push(a):t.push(a)}function T(m,E,A,B,L,l){const a=u(m,E,A,B,L,l);A.transmission>0?i.unshift(a):A.transparent===!0?o.unshift(a):t.unshift(a)}function v(m,E){t.length>1&&t.sort(m||cd),i.length>1&&i.sort(E||Sa),o.length>1&&o.sort(E||Sa)}function P(){for(let m=n,E=e.length;m<E;m++){const A=e[m];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:i,transparent:o,init:r,push:f,unshift:T,finish:P,sort:v}}function ld(){let e=new WeakMap;function n(i,o){const r=e.get(i);let u;return r===void 0?(u=new Ma,e.set(i,[u])):o>=r.length?(u=new Ma,r.push(u)):u=r[o],u}function t(){e=new WeakMap}return{get:n,dispose:t}}function fd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Ne,color:new $e};break;case"SpotLight":t={position:new Ne,direction:new Ne,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ne,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ne,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new Ne,halfWidth:new Ne,halfHeight:new Ne};break}return e[n.id]=t,t}}}function dd(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let ud=0;function pd(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function hd(e){const n=new fd,t=dd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let v=0;v<9;v++)i.probe.push(new Ne);const o=new Ne,r=new on,u=new on;function f(v){let P=0,m=0,E=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let A=0,B=0,L=0,l=0,a=0,b=0,S=0,_=0,w=0,x=0,U=0;v.sort(pd);for(let p=0,d=v.length;p<d;p++){const R=v[p],F=R.color,W=R.intensity,Y=R.distance,I=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)P+=F.r*W,m+=F.g*W,E+=F.b*W;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],W);U++}else if(R.isDirectionalLight){const G=n.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,H=t.get(R);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.directionalShadow[A]=H,i.directionalShadowMap[A]=I,i.directionalShadowMatrix[A]=R.shadow.matrix,b++}i.directional[A]=G,A++}else if(R.isSpotLight){const G=n.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(F).multiplyScalar(W),G.distance=Y,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[L]=G;const $=R.shadow;if(R.map&&(i.spotLightMap[w]=R.map,w++,$.updateMatrices(R),R.castShadow&&x++),i.spotLightMatrix[L]=$.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,i.spotShadow[L]=H,i.spotShadowMap[L]=I,_++}L++}else if(R.isRectAreaLight){const G=n.get(R);G.color.copy(F).multiplyScalar(W),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[l]=G,l++}else if(R.isPointLight){const G=n.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const $=R.shadow,H=t.get(R);H.shadowIntensity=$.intensity,H.shadowBias=$.bias,H.shadowNormalBias=$.normalBias,H.shadowRadius=$.radius,H.shadowMapSize=$.mapSize,H.shadowCameraNear=$.camera.near,H.shadowCameraFar=$.camera.far,i.pointShadow[B]=H,i.pointShadowMap[B]=I,i.pointShadowMatrix[B]=R.shadow.matrix,S++}i.point[B]=G,B++}else if(R.isHemisphereLight){const G=n.get(R);G.skyColor.copy(R.color).multiplyScalar(W),G.groundColor.copy(R.groundColor).multiplyScalar(W),i.hemi[a]=G,a++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=P,i.ambient[1]=m,i.ambient[2]=E;const V=i.hash;(V.directionalLength!==A||V.pointLength!==B||V.spotLength!==L||V.rectAreaLength!==l||V.hemiLength!==a||V.numDirectionalShadows!==b||V.numPointShadows!==S||V.numSpotShadows!==_||V.numSpotMaps!==w||V.numLightProbes!==U)&&(i.directional.length=A,i.spot.length=L,i.rectArea.length=l,i.point.length=B,i.hemi.length=a,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+w-x,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=x,i.numLightProbes=U,V.directionalLength=A,V.pointLength=B,V.spotLength=L,V.rectAreaLength=l,V.hemiLength=a,V.numDirectionalShadows=b,V.numPointShadows=S,V.numSpotShadows=_,V.numSpotMaps=w,V.numLightProbes=U,i.version=ud++)}function T(v,P){let m=0,E=0,A=0,B=0,L=0;const l=P.matrixWorldInverse;for(let a=0,b=v.length;a<b;a++){const S=v[a];if(S.isDirectionalLight){const _=i.directional[m];_.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(o),_.direction.transformDirection(l),m++}else if(S.isSpotLight){const _=i.spot[A];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(l),_.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(o),_.direction.transformDirection(l),A++}else if(S.isRectAreaLight){const _=i.rectArea[B];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(l),u.identity(),r.copy(S.matrixWorld),r.premultiply(l),u.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(u),_.halfHeight.applyMatrix4(u),B++}else if(S.isPointLight){const _=i.point[E];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(l),E++}else if(S.isHemisphereLight){const _=i.hemi[L];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(l),L++}}}return{setup:f,setupView:T,state:i}}function Ta(e){const n=new hd(e),t=[],i=[];function o(P){v.camera=P,t.length=0,i.length=0}function r(P){t.push(P)}function u(P){i.push(P)}function f(){n.setup(t)}function T(P){n.setupView(t,P)}const v={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:o,state:v,setupLights:f,setupLightsView:T,pushLight:r,pushShadow:u}}function md(e){let n=new WeakMap;function t(o,r=0){const u=n.get(o);let f;return u===void 0?(f=new Ta(e),n.set(o,[f])):r>=u.length?(f=new Ta(e),u.push(f)):f=u[r],f}function i(){n=new WeakMap}return{get:t,dispose:i}}const _d=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vd(e,n,t){let i=new Ca;const o=new Ze,r=new Ze,u=new ht,f=new Gr({depthPacking:Hr}),T=new Vr,v={},P=t.maxTextureSize,m={[sn]:St,[St]:sn,[bt]:bt},E=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:_d,fragmentShader:gd}),A=E.clone();A.defines.HORIZONTAL_PASS=1;const B=new Kt;B.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new mt(B,E),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let a=this.type;this.render=function(x,U,V){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||x.length===0)return;const p=e.getRenderTarget(),d=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Bt),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=a!==Rt&&this.type===Rt,Y=a===Rt&&this.type!==Rt;for(let I=0,G=x.length;I<G;I++){const $=x[I],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const le=H.getFrameExtents();if(o.multiply(le),r.copy(H.mapSize),(o.x>P||o.y>P)&&(o.x>P&&(r.x=Math.floor(P/le.x),o.x=r.x*le.x,H.mapSize.x=r.x),o.y>P&&(r.y=Math.floor(P/le.y),o.y=r.y*le.y,H.mapSize.y=r.y)),H.map===null||W===!0||Y===!0){const De=this.type!==Rt?{minFilter:an,magFilter:an}:{};H.map!==null&&H.map.dispose(),H.map=new Zt(o.x,o.y,De),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const Se=H.getViewportCount();for(let De=0;De<Se;De++){const Ue=H.getViewport(De);u.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),F.viewport(u),H.updateMatrices($,De),i=H.getFrustum(),_(U,V,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===Rt&&b(H,V),H.needsUpdate=!1}a=this.type,l.needsUpdate=!1,e.setRenderTarget(p,d,R)};function b(x,U){const V=n.update(L);E.defines.VSM_SAMPLES!==x.blurSamples&&(E.defines.VSM_SAMPLES=x.blurSamples,A.defines.VSM_SAMPLES=x.blurSamples,E.needsUpdate=!0,A.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Zt(o.x,o.y)),E.uniforms.shadow_pass.value=x.map.texture,E.uniforms.resolution.value=x.mapSize,E.uniforms.radius.value=x.radius,e.setRenderTarget(x.mapPass),e.clear(),e.renderBufferDirect(U,null,V,E,L,null),A.uniforms.shadow_pass.value=x.mapPass.texture,A.uniforms.resolution.value=x.mapSize,A.uniforms.radius.value=x.radius,e.setRenderTarget(x.map),e.clear(),e.renderBufferDirect(U,null,V,A,L,null)}function S(x,U,V,p){let d=null;const R=V.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(R!==void 0)d=R;else if(d=V.isPointLight===!0?T:f,e.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const F=d.uuid,W=U.uuid;let Y=v[F];Y===void 0&&(Y={},v[F]=Y);let I=Y[W];I===void 0&&(I=d.clone(),Y[W]=I,U.addEventListener("dispose",w)),d=I}if(d.visible=U.visible,d.wireframe=U.wireframe,p===Rt?d.side=U.shadowSide!==null?U.shadowSide:U.side:d.side=U.shadowSide!==null?U.shadowSide:m[U.side],d.alphaMap=U.alphaMap,d.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,d.map=U.map,d.clipShadows=U.clipShadows,d.clippingPlanes=U.clippingPlanes,d.clipIntersection=U.clipIntersection,d.displacementMap=U.displacementMap,d.displacementScale=U.displacementScale,d.displacementBias=U.displacementBias,d.wireframeLinewidth=U.wireframeLinewidth,d.linewidth=U.linewidth,V.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const F=e.properties.get(d);F.light=V}return d}function _(x,U,V,p,d){if(x.visible===!1)return;if(x.layers.test(U.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&d===Rt)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld);const W=n.update(x),Y=x.material;if(Array.isArray(Y)){const I=W.groups;for(let G=0,$=I.length;G<$;G++){const H=I[G],le=Y[H.materialIndex];if(le&&le.visible){const Se=S(x,le,p,d);x.onBeforeShadow(e,x,U,V,W,Se,H),e.renderBufferDirect(V,null,W,Se,x,H),x.onAfterShadow(e,x,U,V,W,Se,H)}}}else if(Y.visible){const I=S(x,Y,p,d);x.onBeforeShadow(e,x,U,V,W,I,null),e.renderBufferDirect(V,null,W,I,x,null),x.onAfterShadow(e,x,U,V,W,I,null)}}const F=x.children;for(let W=0,Y=F.length;W<Y;W++)_(F[W],U,V,p,d)}function w(x){x.target.removeEventListener("dispose",w);for(const V in v){const p=v[V],d=x.target.uuid;d in p&&(p[d].dispose(),delete p[d])}}}const Ed={[Jn]:Qn,[jn]:qn,[$n]:Kn,[Mn]:Zn,[Qn]:Jn,[qn]:jn,[Kn]:$n,[Zn]:Mn};function Sd(e,n){function t(){let M=!1;const ee=new ht;let ne=null;const fe=new ht(0,0,0,0);return{setMask:function(j){ne!==j&&!M&&(e.colorMask(j,j,j,j),ne=j)},setLocked:function(j){M=j},setClear:function(j,K,ue,Le,qe){qe===!0&&(j*=Le,K*=Le,ue*=Le),ee.set(j,K,ue,Le),fe.equals(ee)===!1&&(e.clearColor(j,K,ue,Le),fe.copy(ee))},reset:function(){M=!1,ne=null,fe.set(-1,0,0,0)}}}function i(){let M=!1,ee=!1,ne=null,fe=null,j=null;return{setReversed:function(K){if(ee!==K){const ue=n.get("EXT_clip_control");K?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),ee=K;const Le=j;j=null,this.setClear(Le)}},getReversed:function(){return ee},setTest:function(K){K?q(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(K){ne!==K&&!M&&(e.depthMask(K),ne=K)},setFunc:function(K){if(ee&&(K=Ed[K]),fe!==K){switch(K){case Jn:e.depthFunc(e.NEVER);break;case Qn:e.depthFunc(e.ALWAYS);break;case jn:e.depthFunc(e.LESS);break;case Mn:e.depthFunc(e.LEQUAL);break;case $n:e.depthFunc(e.EQUAL);break;case Zn:e.depthFunc(e.GEQUAL);break;case qn:e.depthFunc(e.GREATER);break;case Kn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}fe=K}},setLocked:function(K){M=K},setClear:function(K){j!==K&&(ee&&(K=1-K),e.clearDepth(K),j=K)},reset:function(){M=!1,ne=null,fe=null,j=null,ee=!1}}}function o(){let M=!1,ee=null,ne=null,fe=null,j=null,K=null,ue=null,Le=null,qe=null;return{setTest:function(He){M||(He?q(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(He){ee!==He&&!M&&(e.stencilMask(He),ee=He)},setFunc:function(He,At,Mt){(ne!==He||fe!==At||j!==Mt)&&(e.stencilFunc(He,At,Mt),ne=He,fe=At,j=Mt)},setOp:function(He,At,Mt){(K!==He||ue!==At||Le!==Mt)&&(e.stencilOp(He,At,Mt),K=He,ue=At,Le=Mt)},setLocked:function(He){M=He},setClear:function(He){qe!==He&&(e.clearStencil(He),qe=He)},reset:function(){M=!1,ee=null,ne=null,fe=null,j=null,K=null,ue=null,Le=null,qe=null}}}const r=new t,u=new i,f=new o,T=new WeakMap,v=new WeakMap;let P={},m={},E=new WeakMap,A=[],B=null,L=!1,l=null,a=null,b=null,S=null,_=null,w=null,x=null,U=new $e(0,0,0),V=0,p=!1,d=null,R=null,F=null,W=null,Y=null;const I=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,$=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=$>=1):H.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=$>=2);let le=null,Se={};const De=e.getParameter(e.SCISSOR_BOX),Ue=e.getParameter(e.VIEWPORT),ke=new ht().fromArray(De),Ye=new ht().fromArray(Ue);function Ve(M,ee,ne,fe){const j=new Uint8Array(4),K=e.createTexture();e.bindTexture(M,K),e.texParameteri(M,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(M,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ue=0;ue<ne;ue++)M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY?e.texImage3D(ee,0,e.RGBA,1,1,fe,0,e.RGBA,e.UNSIGNED_BYTE,j):e.texImage2D(ee+ue,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,j);return K}const X={};X[e.TEXTURE_2D]=Ve(e.TEXTURE_2D,e.TEXTURE_2D,1),X[e.TEXTURE_CUBE_MAP]=Ve(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[e.TEXTURE_2D_ARRAY]=Ve(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),X[e.TEXTURE_3D]=Ve(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),u.setClear(1),f.setClear(0),q(e.DEPTH_TEST),u.setFunc(Mn),Re(!1),he(zi),q(e.CULL_FACE),Ke(Bt);function q(M){P[M]!==!0&&(e.enable(M),P[M]=!0)}function se(M){P[M]!==!1&&(e.disable(M),P[M]=!1)}function Me(M,ee){return m[M]!==ee?(e.bindFramebuffer(M,ee),m[M]=ee,M===e.DRAW_FRAMEBUFFER&&(m[e.FRAMEBUFFER]=ee),M===e.FRAMEBUFFER&&(m[e.DRAW_FRAMEBUFFER]=ee),!0):!1}function pe(M,ee){let ne=A,fe=!1;if(M){ne=E.get(ee),ne===void 0&&(ne=[],E.set(ee,ne));const j=M.textures;if(ne.length!==j.length||ne[0]!==e.COLOR_ATTACHMENT0){for(let K=0,ue=j.length;K<ue;K++)ne[K]=e.COLOR_ATTACHMENT0+K;ne.length=j.length,fe=!0}}else ne[0]!==e.BACK&&(ne[0]=e.BACK,fe=!0);fe&&e.drawBuffers(ne)}function Oe(M){return B!==M?(e.useProgram(M),B=M,!0):!1}const at={[Jt]:e.FUNC_ADD,[ur]:e.FUNC_SUBTRACT,[dr]:e.FUNC_REVERSE_SUBTRACT};at[Ao]=e.MIN,at[Ro]=e.MAX;const g={[Cr]:e.ZERO,[br]:e.ONE,[Rr]:e.SRC_COLOR,[Ar]:e.SRC_ALPHA,[xr]:e.SRC_ALPHA_SATURATE,[Tr]:e.DST_COLOR,[Mr]:e.DST_ALPHA,[Sr]:e.ONE_MINUS_SRC_COLOR,[Er]:e.ONE_MINUS_SRC_ALPHA,[vr]:e.ONE_MINUS_DST_COLOR,[gr]:e.ONE_MINUS_DST_ALPHA,[_r]:e.CONSTANT_COLOR,[mr]:e.ONE_MINUS_CONSTANT_COLOR,[hr]:e.CONSTANT_ALPHA,[pr]:e.ONE_MINUS_CONSTANT_ALPHA};function Ke(M,ee,ne,fe,j,K,ue,Le,qe,He){if(M===Bt){L===!0&&(se(e.BLEND),L=!1);return}if(L===!1&&(q(e.BLEND),L=!0),M!==Qr){if(M!==l||He!==p){if((a!==Jt||_!==Jt)&&(e.blendEquation(e.FUNC_ADD),a=Jt,_=Jt),He)switch(M){case vn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Pt:e.blendFunc(e.ONE,e.ONE);break;case Xi:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Wi:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case vn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Pt:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Xi:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wi:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}b=null,S=null,w=null,x=null,U.set(0,0,0),V=0,l=M,p=He}return}j=j||ee,K=K||ne,ue=ue||fe,(ee!==a||j!==_)&&(e.blendEquationSeparate(at[ee],at[j]),a=ee,_=j),(ne!==b||fe!==S||K!==w||ue!==x)&&(e.blendFuncSeparate(g[ne],g[fe],g[K],g[ue]),b=ne,S=fe,w=K,x=ue),(Le.equals(U)===!1||qe!==V)&&(e.blendColor(Le.r,Le.g,Le.b,qe),U.copy(Le),V=qe),l=M,p=!1}function Ae(M,ee){M.side===bt?se(e.CULL_FACE):q(e.CULL_FACE);let ne=M.side===St;ee&&(ne=!ne),Re(ne),M.blending===vn&&M.transparent===!1?Ke(Bt):Ke(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),u.setFunc(M.depthFunc),u.setTest(M.depthTest),u.setMask(M.depthWrite),r.setMask(M.colorWrite);const fe=M.stencilWrite;f.setTest(fe),fe&&(f.setMask(M.stencilWriteMask),f.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),f.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),me(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?q(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(M){d!==M&&(M?e.frontFace(e.CW):e.frontFace(e.CCW),d=M)}function he(M){M!==$r?(q(e.CULL_FACE),M!==R&&(M===zi?e.cullFace(e.BACK):M===jr?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):se(e.CULL_FACE),R=M}function Je(M){M!==F&&(G&&e.lineWidth(M),F=M)}function me(M,ee,ne){M?(q(e.POLYGON_OFFSET_FILL),(W!==ee||Y!==ne)&&(e.polygonOffset(ee,ne),W=ee,Y=ne)):se(e.POLYGON_OFFSET_FILL)}function ye(M){M?q(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function lt(M){M===void 0&&(M=e.TEXTURE0+I-1),le!==M&&(e.activeTexture(M),le=M)}function it(M,ee,ne){ne===void 0&&(le===null?ne=e.TEXTURE0+I-1:ne=le);let fe=Se[ne];fe===void 0&&(fe={type:void 0,texture:void 0},Se[ne]=fe),(fe.type!==M||fe.texture!==ee)&&(le!==ne&&(e.activeTexture(ne),le=ne),e.bindTexture(M,ee||X[M]),fe.type=M,fe.texture=ee)}function h(){const M=Se[le];M!==void 0&&M.type!==void 0&&(e.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function s(){try{e.compressedTexImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function y(){try{e.compressedTexImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function z(){try{e.texSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Z(){try{e.texSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ee(){try{e.compressedTexSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function te(){try{e.texStorage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function _e(){try{e.texStorage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ge(){try{e.texImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function J(){try{e.texImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function oe(M){ke.equals(M)===!1&&(e.scissor(M.x,M.y,M.z,M.w),ke.copy(M))}function Ce(M){Ye.equals(M)===!1&&(e.viewport(M.x,M.y,M.z,M.w),Ye.copy(M))}function ve(M,ee){let ne=v.get(ee);ne===void 0&&(ne=new WeakMap,v.set(ee,ne));let fe=ne.get(M);fe===void 0&&(fe=e.getUniformBlockIndex(ee,M.name),ne.set(M,fe))}function ae(M,ee){const fe=v.get(ee).get(M);T.get(ee)!==fe&&(e.uniformBlockBinding(ee,fe,M.__bindingPointIndex),T.set(ee,fe))}function we(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),u.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),P={},le=null,Se={},m={},E=new WeakMap,A=[],B=null,L=!1,l=null,a=null,b=null,S=null,_=null,w=null,x=null,U=new $e(0,0,0),V=0,p=!1,d=null,R=null,F=null,W=null,Y=null,ke.set(0,0,e.canvas.width,e.canvas.height),Ye.set(0,0,e.canvas.width,e.canvas.height),r.reset(),u.reset(),f.reset()}return{buffers:{color:r,depth:u,stencil:f},enable:q,disable:se,bindFramebuffer:Me,drawBuffers:pe,useProgram:Oe,setBlending:Ke,setMaterial:Ae,setFlipSided:Re,setCullFace:he,setLineWidth:Je,setPolygonOffset:me,setScissorTest:ye,activeTexture:lt,bindTexture:it,unbindTexture:h,compressedTexImage2D:s,compressedTexImage3D:y,texImage2D:ge,texImage3D:J,updateUBOMapping:ve,uniformBlockBinding:ae,texStorage2D:te,texStorage3D:_e,texSubImage2D:z,texSubImage3D:Z,compressedTexSubImage2D:k,compressedTexSubImage3D:Ee,scissor:oe,viewport:Ce,reset:we}}function Md(e,n,t,i,o,r,u){const f=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,T=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new Ze,P=new WeakMap;let m;const E=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function B(h,s){return A?new OffscreenCanvas(h,s):So("canvas")}function L(h,s,y){let z=1;const Z=it(h);if((Z.width>y||Z.height>y)&&(z=y/Math.max(Z.width,Z.height)),z<1)if(typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&h instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&h instanceof ImageBitmap||typeof VideoFrame<"u"&&h instanceof VideoFrame){const k=Math.floor(z*Z.width),Ee=Math.floor(z*Z.height);m===void 0&&(m=B(k,Ee));const te=s?B(k,Ee):m;return te.width=k,te.height=Ee,te.getContext("2d").drawImage(h,0,0,k,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+Ee+")."),te}else return"data"in h&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),h;return h}function l(h){return h.generateMipmaps}function a(h){e.generateMipmap(h)}function b(h){return h.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:h.isWebGL3DRenderTarget?e.TEXTURE_3D:h.isWebGLArrayRenderTarget||h.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(h,s,y,z,Z=!1){if(h!==null){if(e[h]!==void 0)return e[h];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+h+"'")}let k=s;if(s===e.RED&&(y===e.FLOAT&&(k=e.R32F),y===e.HALF_FLOAT&&(k=e.R16F),y===e.UNSIGNED_BYTE&&(k=e.R8)),s===e.RED_INTEGER&&(y===e.UNSIGNED_BYTE&&(k=e.R8UI),y===e.UNSIGNED_SHORT&&(k=e.R16UI),y===e.UNSIGNED_INT&&(k=e.R32UI),y===e.BYTE&&(k=e.R8I),y===e.SHORT&&(k=e.R16I),y===e.INT&&(k=e.R32I)),s===e.RG&&(y===e.FLOAT&&(k=e.RG32F),y===e.HALF_FLOAT&&(k=e.RG16F),y===e.UNSIGNED_BYTE&&(k=e.RG8)),s===e.RG_INTEGER&&(y===e.UNSIGNED_BYTE&&(k=e.RG8UI),y===e.UNSIGNED_SHORT&&(k=e.RG16UI),y===e.UNSIGNED_INT&&(k=e.RG32UI),y===e.BYTE&&(k=e.RG8I),y===e.SHORT&&(k=e.RG16I),y===e.INT&&(k=e.RG32I)),s===e.RGB_INTEGER&&(y===e.UNSIGNED_BYTE&&(k=e.RGB8UI),y===e.UNSIGNED_SHORT&&(k=e.RGB16UI),y===e.UNSIGNED_INT&&(k=e.RGB32UI),y===e.BYTE&&(k=e.RGB8I),y===e.SHORT&&(k=e.RGB16I),y===e.INT&&(k=e.RGB32I)),s===e.RGBA_INTEGER&&(y===e.UNSIGNED_BYTE&&(k=e.RGBA8UI),y===e.UNSIGNED_SHORT&&(k=e.RGBA16UI),y===e.UNSIGNED_INT&&(k=e.RGBA32UI),y===e.BYTE&&(k=e.RGBA8I),y===e.SHORT&&(k=e.RGBA16I),y===e.INT&&(k=e.RGBA32I)),s===e.RGB&&(y===e.UNSIGNED_INT_5_9_9_9_REV&&(k=e.RGB9_E5),y===e.UNSIGNED_INT_10F_11F_11F_REV&&(k=e.R11F_G11F_B10F)),s===e.RGBA){const Ee=Z?Wa:rt.getTransfer(z);y===e.FLOAT&&(k=e.RGBA32F),y===e.HALF_FLOAT&&(k=e.RGBA16F),y===e.UNSIGNED_BYTE&&(k=Ee===Qe?e.SRGB8_ALPHA8:e.RGBA8),y===e.UNSIGNED_SHORT_4_4_4_4&&(k=e.RGBA4),y===e.UNSIGNED_SHORT_5_5_5_1&&(k=e.RGB5_A1)}return(k===e.R16F||k===e.R32F||k===e.RG16F||k===e.RG32F||k===e.RGBA16F||k===e.RGBA32F)&&n.get("EXT_color_buffer_float"),k}function _(h,s){let y;return h?s===null||s===ln||s===cn?y=e.DEPTH24_STENCIL8:s===Ft?y=e.DEPTH32F_STENCIL8:s===Tn&&(y=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):s===null||s===ln||s===cn?y=e.DEPTH_COMPONENT24:s===Ft?y=e.DEPTH_COMPONENT32F:s===Tn&&(y=e.DEPTH_COMPONENT16),y}function w(h,s){return l(h)===!0||h.isFramebufferTexture&&h.minFilter!==an&&h.minFilter!==Wt?Math.log2(Math.max(s.width,s.height))+1:h.mipmaps!==void 0&&h.mipmaps.length>0?h.mipmaps.length:h.isCompressedTexture&&Array.isArray(h.image)?s.mipmaps.length:1}function x(h){const s=h.target;s.removeEventListener("dispose",x),V(s),s.isVideoTexture&&P.delete(s)}function U(h){const s=h.target;s.removeEventListener("dispose",U),d(s)}function V(h){const s=i.get(h);if(s.__webglInit===void 0)return;const y=h.source,z=E.get(y);if(z){const Z=z[s.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&p(h),Object.keys(z).length===0&&E.delete(y)}i.remove(h)}function p(h){const s=i.get(h);e.deleteTexture(s.__webglTexture);const y=h.source,z=E.get(y);delete z[s.__cacheKey],u.memory.textures--}function d(h){const s=i.get(h);if(h.depthTexture&&(h.depthTexture.dispose(),i.remove(h.depthTexture)),h.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(s.__webglFramebuffer[z]))for(let Z=0;Z<s.__webglFramebuffer[z].length;Z++)e.deleteFramebuffer(s.__webglFramebuffer[z][Z]);else e.deleteFramebuffer(s.__webglFramebuffer[z]);s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[z])}else{if(Array.isArray(s.__webglFramebuffer))for(let z=0;z<s.__webglFramebuffer.length;z++)e.deleteFramebuffer(s.__webglFramebuffer[z]);else e.deleteFramebuffer(s.__webglFramebuffer);if(s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let z=0;z<s.__webglColorRenderbuffer.length;z++)s.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[z]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}const y=h.textures;for(let z=0,Z=y.length;z<Z;z++){const k=i.get(y[z]);k.__webglTexture&&(e.deleteTexture(k.__webglTexture),u.memory.textures--),i.remove(y[z])}i.remove(h)}let R=0;function F(){R=0}function W(){const h=R;return h>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+h+" texture units while this GPU supports only "+o.maxTextures),R+=1,h}function Y(h){const s=[];return s.push(h.wrapS),s.push(h.wrapT),s.push(h.wrapR||0),s.push(h.magFilter),s.push(h.minFilter),s.push(h.anisotropy),s.push(h.internalFormat),s.push(h.format),s.push(h.type),s.push(h.generateMipmaps),s.push(h.premultiplyAlpha),s.push(h.flipY),s.push(h.unpackAlignment),s.push(h.colorSpace),s.join()}function I(h,s){const y=i.get(h);if(h.isVideoTexture&&ye(h),h.isRenderTargetTexture===!1&&h.isExternalTexture!==!0&&h.version>0&&y.__version!==h.version){const z=h.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(y,h,s);return}}else h.isExternalTexture&&(y.__webglTexture=h.sourceTexture?h.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,y.__webglTexture,e.TEXTURE0+s)}function G(h,s){const y=i.get(h);if(h.isRenderTargetTexture===!1&&h.version>0&&y.__version!==h.version){X(y,h,s);return}t.bindTexture(e.TEXTURE_2D_ARRAY,y.__webglTexture,e.TEXTURE0+s)}function $(h,s){const y=i.get(h);if(h.isRenderTargetTexture===!1&&h.version>0&&y.__version!==h.version){X(y,h,s);return}t.bindTexture(e.TEXTURE_3D,y.__webglTexture,e.TEXTURE0+s)}function H(h,s){const y=i.get(h);if(h.version>0&&y.__version!==h.version){q(y,h,s);return}t.bindTexture(e.TEXTURE_CUBE_MAP,y.__webglTexture,e.TEXTURE0+s)}const le={[Lr]:e.REPEAT,[Dr]:e.CLAMP_TO_EDGE,[Pr]:e.MIRRORED_REPEAT},Se={[an]:e.NEAREST,[wr]:e.NEAREST_MIPMAP_NEAREST,[pn]:e.NEAREST_MIPMAP_LINEAR,[Wt]:e.LINEAR,[wn]:e.LINEAR_MIPMAP_NEAREST,[en]:e.LINEAR_MIPMAP_LINEAR},De={[Br]:e.NEVER,[Fr]:e.ALWAYS,[Or]:e.LESS,[Da]:e.LEQUAL,[Nr]:e.EQUAL,[Ir]:e.GEQUAL,[yr]:e.GREATER,[Ur]:e.NOTEQUAL};function Ue(h,s){if(s.type===Ft&&n.has("OES_texture_float_linear")===!1&&(s.magFilter===Wt||s.magFilter===wn||s.magFilter===pn||s.magFilter===en||s.minFilter===Wt||s.minFilter===wn||s.minFilter===pn||s.minFilter===en)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(h,e.TEXTURE_WRAP_S,le[s.wrapS]),e.texParameteri(h,e.TEXTURE_WRAP_T,le[s.wrapT]),(h===e.TEXTURE_3D||h===e.TEXTURE_2D_ARRAY)&&e.texParameteri(h,e.TEXTURE_WRAP_R,le[s.wrapR]),e.texParameteri(h,e.TEXTURE_MAG_FILTER,Se[s.magFilter]),e.texParameteri(h,e.TEXTURE_MIN_FILTER,Se[s.minFilter]),s.compareFunction&&(e.texParameteri(h,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(h,e.TEXTURE_COMPARE_FUNC,De[s.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(s.magFilter===an||s.minFilter!==pn&&s.minFilter!==en||s.type===Ft&&n.has("OES_texture_float_linear")===!1)return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const y=n.get("EXT_texture_filter_anisotropic");e.texParameterf(h,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,o.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy}}}function ke(h,s){let y=!1;h.__webglInit===void 0&&(h.__webglInit=!0,s.addEventListener("dispose",x));const z=s.source;let Z=E.get(z);Z===void 0&&(Z={},E.set(z,Z));const k=Y(s);if(k!==h.__cacheKey){Z[k]===void 0&&(Z[k]={texture:e.createTexture(),usedTimes:0},u.memory.textures++,y=!0),Z[k].usedTimes++;const Ee=Z[h.__cacheKey];Ee!==void 0&&(Z[h.__cacheKey].usedTimes--,Ee.usedTimes===0&&p(s)),h.__cacheKey=k,h.__webglTexture=Z[k].texture}return y}function Ye(h,s,y){return Math.floor(Math.floor(h/y)/s)}function Ve(h,s,y,z){const k=h.updateRanges;if(k.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,y,z,s.data);else{k.sort((J,oe)=>J.start-oe.start);let Ee=0;for(let J=1;J<k.length;J++){const oe=k[Ee],Ce=k[J],ve=oe.start+oe.count,ae=Ye(Ce.start,s.width,4),we=Ye(oe.start,s.width,4);Ce.start<=ve+1&&ae===we&&Ye(Ce.start+Ce.count-1,s.width,4)===ae?oe.count=Math.max(oe.count,Ce.start+Ce.count-oe.start):(++Ee,k[Ee]=Ce)}k.length=Ee+1;const te=e.getParameter(e.UNPACK_ROW_LENGTH),_e=e.getParameter(e.UNPACK_SKIP_PIXELS),ge=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let J=0,oe=k.length;J<oe;J++){const Ce=k[J],ve=Math.floor(Ce.start/4),ae=Math.ceil(Ce.count/4),we=ve%s.width,M=Math.floor(ve/s.width),ee=ae,ne=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,we),e.pixelStorei(e.UNPACK_SKIP_ROWS,M),t.texSubImage2D(e.TEXTURE_2D,0,we,M,ee,ne,y,z,s.data)}h.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,te),e.pixelStorei(e.UNPACK_SKIP_PIXELS,_e),e.pixelStorei(e.UNPACK_SKIP_ROWS,ge)}}function X(h,s,y){let z=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(z=e.TEXTURE_3D);const Z=ke(h,s),k=s.source;t.bindTexture(z,h.__webglTexture,e.TEXTURE0+y);const Ee=i.get(k);if(k.version!==Ee.__version||Z===!0){t.activeTexture(e.TEXTURE0+y);const te=rt.getPrimaries(rt.workingColorSpace),_e=s.colorSpace===zt?null:rt.getPrimaries(s.colorSpace),ge=s.colorSpace===zt||te===_e?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let J=L(s.image,!1,o.maxTextureSize);J=lt(s,J);const oe=r.convert(s.format,s.colorSpace),Ce=r.convert(s.type);let ve=S(s.internalFormat,oe,Ce,s.colorSpace,s.isVideoTexture);Ue(z,s);let ae;const we=s.mipmaps,M=s.isVideoTexture!==!0,ee=Ee.__version===void 0||Z===!0,ne=k.dataReady,fe=w(s,J);if(s.isDepthTexture)ve=_(s.format===Sn,s.type),ee&&(M?t.texStorage2D(e.TEXTURE_2D,1,ve,J.width,J.height):t.texImage2D(e.TEXTURE_2D,0,ve,J.width,J.height,0,oe,Ce,null));else if(s.isDataTexture)if(we.length>0){M&&ee&&t.texStorage2D(e.TEXTURE_2D,fe,ve,we[0].width,we[0].height);for(let j=0,K=we.length;j<K;j++)ae=we[j],M?ne&&t.texSubImage2D(e.TEXTURE_2D,j,0,0,ae.width,ae.height,oe,Ce,ae.data):t.texImage2D(e.TEXTURE_2D,j,ve,ae.width,ae.height,0,oe,Ce,ae.data);s.generateMipmaps=!1}else M?(ee&&t.texStorage2D(e.TEXTURE_2D,fe,ve,J.width,J.height),ne&&Ve(s,J,oe,Ce)):t.texImage2D(e.TEXTURE_2D,0,ve,J.width,J.height,0,oe,Ce,J.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){M&&ee&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,ve,we[0].width,we[0].height,J.depth);for(let j=0,K=we.length;j<K;j++)if(ae=we[j],s.format!==Ct)if(oe!==null)if(M){if(ne)if(s.layerUpdates.size>0){const ue=Ki(ae.width,ae.height,s.format,s.type);for(const Le of s.layerUpdates){const qe=ae.data.subarray(Le*ue/ae.data.BYTES_PER_ELEMENT,(Le+1)*ue/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,Le,ae.width,ae.height,1,oe,qe)}s.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ae.width,ae.height,J.depth,oe,ae.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,ve,ae.width,ae.height,J.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else M?ne&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ae.width,ae.height,J.depth,oe,Ce,ae.data):t.texImage3D(e.TEXTURE_2D_ARRAY,j,ve,ae.width,ae.height,J.depth,0,oe,Ce,ae.data)}else{M&&ee&&t.texStorage2D(e.TEXTURE_2D,fe,ve,we[0].width,we[0].height);for(let j=0,K=we.length;j<K;j++)ae=we[j],s.format!==Ct?oe!==null?M?ne&&t.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(e.TEXTURE_2D,j,ve,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):M?ne&&t.texSubImage2D(e.TEXTURE_2D,j,0,0,ae.width,ae.height,oe,Ce,ae.data):t.texImage2D(e.TEXTURE_2D,j,ve,ae.width,ae.height,0,oe,Ce,ae.data)}else if(s.isDataArrayTexture)if(M){if(ee&&t.texStorage3D(e.TEXTURE_2D_ARRAY,fe,ve,J.width,J.height,J.depth),ne)if(s.layerUpdates.size>0){const j=Ki(J.width,J.height,s.format,s.type);for(const K of s.layerUpdates){const ue=J.data.subarray(K*j/J.data.BYTES_PER_ELEMENT,(K+1)*j/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,K,J.width,J.height,1,oe,Ce,ue)}s.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,Ce,J.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,ve,J.width,J.height,J.depth,0,oe,Ce,J.data);else if(s.isData3DTexture)M?(ee&&t.texStorage3D(e.TEXTURE_3D,fe,ve,J.width,J.height,J.depth),ne&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,Ce,J.data)):t.texImage3D(e.TEXTURE_3D,0,ve,J.width,J.height,J.depth,0,oe,Ce,J.data);else if(s.isFramebufferTexture){if(ee)if(M)t.texStorage2D(e.TEXTURE_2D,fe,ve,J.width,J.height);else{let j=J.width,K=J.height;for(let ue=0;ue<fe;ue++)t.texImage2D(e.TEXTURE_2D,ue,ve,j,K,0,oe,Ce,null),j>>=1,K>>=1}}else if(we.length>0){if(M&&ee){const j=it(we[0]);t.texStorage2D(e.TEXTURE_2D,fe,ve,j.width,j.height)}for(let j=0,K=we.length;j<K;j++)ae=we[j],M?ne&&t.texSubImage2D(e.TEXTURE_2D,j,0,0,oe,Ce,ae):t.texImage2D(e.TEXTURE_2D,j,ve,oe,Ce,ae);s.generateMipmaps=!1}else if(M){if(ee){const j=it(J);t.texStorage2D(e.TEXTURE_2D,fe,ve,j.width,j.height)}ne&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,Ce,J)}else t.texImage2D(e.TEXTURE_2D,0,ve,oe,Ce,J);l(s)&&a(z),Ee.__version=k.version,s.onUpdate&&s.onUpdate(s)}h.__version=s.version}function q(h,s,y){if(s.image.length!==6)return;const z=ke(h,s),Z=s.source;t.bindTexture(e.TEXTURE_CUBE_MAP,h.__webglTexture,e.TEXTURE0+y);const k=i.get(Z);if(Z.version!==k.__version||z===!0){t.activeTexture(e.TEXTURE0+y);const Ee=rt.getPrimaries(rt.workingColorSpace),te=s.colorSpace===zt?null:rt.getPrimaries(s.colorSpace),_e=s.colorSpace===zt||Ee===te?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ge=s.isCompressedTexture||s.image[0].isCompressedTexture,J=s.image[0]&&s.image[0].isDataTexture,oe=[];for(let K=0;K<6;K++)!ge&&!J?oe[K]=L(s.image[K],!0,o.maxCubemapSize):oe[K]=J?s.image[K].image:s.image[K],oe[K]=lt(s,oe[K]);const Ce=oe[0],ve=r.convert(s.format,s.colorSpace),ae=r.convert(s.type),we=S(s.internalFormat,ve,ae,s.colorSpace),M=s.isVideoTexture!==!0,ee=k.__version===void 0||z===!0,ne=Z.dataReady;let fe=w(s,Ce);Ue(e.TEXTURE_CUBE_MAP,s);let j;if(ge){M&&ee&&t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,we,Ce.width,Ce.height);for(let K=0;K<6;K++){j=oe[K].mipmaps;for(let ue=0;ue<j.length;ue++){const Le=j[ue];s.format!==Ct?ve!==null?M?ne&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,Le.width,Le.height,ve,Le.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,we,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):M?ne&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,0,0,Le.width,Le.height,ve,ae,Le.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue,we,Le.width,Le.height,0,ve,ae,Le.data)}}}else{if(j=s.mipmaps,M&&ee){j.length>0&&fe++;const K=it(oe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,we,K.width,K.height)}for(let K=0;K<6;K++)if(J){M?ne&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,oe[K].width,oe[K].height,ve,ae,oe[K].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,we,oe[K].width,oe[K].height,0,ve,ae,oe[K].data);for(let ue=0;ue<j.length;ue++){const qe=j[ue].image[K].image;M?ne&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,qe.width,qe.height,ve,ae,qe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,we,qe.width,qe.height,0,ve,ae,qe.data)}}else{M?ne&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ve,ae,oe[K]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,we,ve,ae,oe[K]);for(let ue=0;ue<j.length;ue++){const Le=j[ue];M?ne&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,0,0,ve,ae,Le.image[K]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+K,ue+1,we,ve,ae,Le.image[K])}}}l(s)&&a(e.TEXTURE_CUBE_MAP),k.__version=Z.version,s.onUpdate&&s.onUpdate(s)}h.__version=s.version}function se(h,s,y,z,Z,k){const Ee=r.convert(y.format,y.colorSpace),te=r.convert(y.type),_e=S(y.internalFormat,Ee,te,y.colorSpace),ge=i.get(s),J=i.get(y);if(J.__renderTarget=s,!ge.__hasExternalTextures){const oe=Math.max(1,s.width>>k),Ce=Math.max(1,s.height>>k);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?t.texImage3D(Z,k,_e,oe,Ce,s.depth,0,Ee,te,null):t.texImage2D(Z,k,_e,oe,Ce,0,Ee,te,null)}t.bindFramebuffer(e.FRAMEBUFFER,h),me(s)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,Z,J.__webglTexture,0,Je(s)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,Z,J.__webglTexture,k),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(h,s,y){if(e.bindRenderbuffer(e.RENDERBUFFER,h),s.depthBuffer){const z=s.depthTexture,Z=z&&z.isDepthTexture?z.type:null,k=_(s.stencilBuffer,Z),Ee=s.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=Je(s);me(s)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,te,k,s.width,s.height):y?e.renderbufferStorageMultisample(e.RENDERBUFFER,te,k,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,k,s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ee,e.RENDERBUFFER,h)}else{const z=s.textures;for(let Z=0;Z<z.length;Z++){const k=z[Z],Ee=r.convert(k.format,k.colorSpace),te=r.convert(k.type),_e=S(k.internalFormat,Ee,te,k.colorSpace),ge=Je(s);y&&me(s)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,ge,_e,s.width,s.height):me(s)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ge,_e,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,_e,s.width,s.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function pe(h,s){if(s&&s.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,h),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(s.depthTexture);z.__renderTarget=s,(!z.__webglTexture||s.depthTexture.image.width!==s.width||s.depthTexture.image.height!==s.height)&&(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),I(s.depthTexture,0);const Z=z.__webglTexture,k=Je(s);if(s.depthTexture.format===ai)me(s)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0,k):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Z,0);else if(s.depthTexture.format===Sn)me(s)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0,k):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Oe(h){const s=i.get(h),y=h.isWebGLCubeRenderTarget===!0;if(s.__boundDepthTexture!==h.depthTexture){const z=h.depthTexture;if(s.__depthDisposeCallback&&s.__depthDisposeCallback(),z){const Z=()=>{delete s.__boundDepthTexture,delete s.__depthDisposeCallback,z.removeEventListener("dispose",Z)};z.addEventListener("dispose",Z),s.__depthDisposeCallback=Z}s.__boundDepthTexture=z}if(h.depthTexture&&!s.__autoAllocateDepthBuffer){if(y)throw new Error("target.depthTexture not supported in Cube render targets");const z=h.texture.mipmaps;z&&z.length>0?pe(s.__webglFramebuffer[0],h):pe(s.__webglFramebuffer,h)}else if(y){s.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[z]),s.__webglDepthbuffer[z]===void 0)s.__webglDepthbuffer[z]=e.createRenderbuffer(),Me(s.__webglDepthbuffer[z],h,!1);else{const Z=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=s.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,k)}}else{const z=h.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),s.__webglDepthbuffer===void 0)s.__webglDepthbuffer=e.createRenderbuffer(),Me(s.__webglDepthbuffer,h,!1);else{const Z=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,k=s.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,k),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,k)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function at(h,s,y){const z=i.get(h);s!==void 0&&se(z.__webglFramebuffer,h,h.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),y!==void 0&&Oe(h)}function g(h){const s=h.texture,y=i.get(h),z=i.get(s);h.addEventListener("dispose",U);const Z=h.textures,k=h.isWebGLCubeRenderTarget===!0,Ee=Z.length>1;if(Ee||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=s.version,u.memory.textures++),k){y.__webglFramebuffer=[];for(let te=0;te<6;te++)if(s.mipmaps&&s.mipmaps.length>0){y.__webglFramebuffer[te]=[];for(let _e=0;_e<s.mipmaps.length;_e++)y.__webglFramebuffer[te][_e]=e.createFramebuffer()}else y.__webglFramebuffer[te]=e.createFramebuffer()}else{if(s.mipmaps&&s.mipmaps.length>0){y.__webglFramebuffer=[];for(let te=0;te<s.mipmaps.length;te++)y.__webglFramebuffer[te]=e.createFramebuffer()}else y.__webglFramebuffer=e.createFramebuffer();if(Ee)for(let te=0,_e=Z.length;te<_e;te++){const ge=i.get(Z[te]);ge.__webglTexture===void 0&&(ge.__webglTexture=e.createTexture(),u.memory.textures++)}if(h.samples>0&&me(h)===!1){y.__webglMultisampledFramebuffer=e.createFramebuffer(),y.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let te=0;te<Z.length;te++){const _e=Z[te];y.__webglColorRenderbuffer[te]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,y.__webglColorRenderbuffer[te]);const ge=r.convert(_e.format,_e.colorSpace),J=r.convert(_e.type),oe=S(_e.internalFormat,ge,J,_e.colorSpace,h.isXRRenderTarget===!0),Ce=Je(h);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ce,oe,h.width,h.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+te,e.RENDERBUFFER,y.__webglColorRenderbuffer[te])}e.bindRenderbuffer(e.RENDERBUFFER,null),h.depthBuffer&&(y.__webglDepthRenderbuffer=e.createRenderbuffer(),Me(y.__webglDepthRenderbuffer,h,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(k){t.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),Ue(e.TEXTURE_CUBE_MAP,s);for(let te=0;te<6;te++)if(s.mipmaps&&s.mipmaps.length>0)for(let _e=0;_e<s.mipmaps.length;_e++)se(y.__webglFramebuffer[te][_e],h,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,_e);else se(y.__webglFramebuffer[te],h,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);l(s)&&a(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let te=0,_e=Z.length;te<_e;te++){const ge=Z[te],J=i.get(ge);let oe=e.TEXTURE_2D;(h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(oe=h.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Ue(oe,ge),se(y.__webglFramebuffer,h,ge,e.COLOR_ATTACHMENT0+te,oe,0),l(ge)&&a(oe)}t.unbindTexture()}else{let te=e.TEXTURE_2D;if((h.isWebGL3DRenderTarget||h.isWebGLArrayRenderTarget)&&(te=h.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(te,z.__webglTexture),Ue(te,s),s.mipmaps&&s.mipmaps.length>0)for(let _e=0;_e<s.mipmaps.length;_e++)se(y.__webglFramebuffer[_e],h,s,e.COLOR_ATTACHMENT0,te,_e);else se(y.__webglFramebuffer,h,s,e.COLOR_ATTACHMENT0,te,0);l(s)&&a(te),t.unbindTexture()}h.depthBuffer&&Oe(h)}function Ke(h){const s=h.textures;for(let y=0,z=s.length;y<z;y++){const Z=s[y];if(l(Z)){const k=b(h),Ee=i.get(Z).__webglTexture;t.bindTexture(k,Ee),a(k),t.unbindTexture()}}}const Ae=[],Re=[];function he(h){if(h.samples>0){if(me(h)===!1){const s=h.textures,y=h.width,z=h.height;let Z=e.COLOR_BUFFER_BIT;const k=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ee=i.get(h),te=s.length>1;if(te)for(let ge=0;ge<s.length;ge++)t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const _e=h.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<s.length;ge++){if(h.resolveDepthBuffer&&(h.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),h.stencilBuffer&&h.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),te){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const J=i.get(s[ge]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,y,z,0,0,y,z,Z,e.NEAREST),T===!0&&(Ae.length=0,Re.length=0,Ae.push(e.COLOR_ATTACHMENT0+ge),h.depthBuffer&&h.resolveDepthBuffer===!1&&(Ae.push(k),Re.push(k),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Re)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ae))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),te)for(let ge=0;ge<s.length;ge++){t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const J=i.get(s[ge]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,J,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(h.depthBuffer&&h.resolveDepthBuffer===!1&&T){const s=h.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])}}}function Je(h){return Math.min(o.maxSamples,h.samples)}function me(h){const s=i.get(h);return h.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&s.__useRenderToTexture!==!1}function ye(h){const s=u.render.frame;P.get(h)!==s&&(P.set(h,s),h.update())}function lt(h,s){const y=h.colorSpace,z=h.format,Z=h.type;return h.isCompressedTexture===!0||h.isVideoTexture===!0||y!==Rn&&y!==zt&&(rt.getTransfer(y)===Qe?(z!==Ct||Z!==Gt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",y)),s}function it(h){return typeof HTMLImageElement<"u"&&h instanceof HTMLImageElement?(v.width=h.naturalWidth||h.width,v.height=h.naturalHeight||h.height):typeof VideoFrame<"u"&&h instanceof VideoFrame?(v.width=h.displayWidth,v.height=h.displayHeight):(v.width=h.width,v.height=h.height),v}this.allocateTextureUnit=W,this.resetTextureUnits=F,this.setTexture2D=I,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=H,this.rebindTextures=at,this.setupRenderTarget=g,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=me}function Td(e,n){function t(i,o=zt){let r;const u=rt.getTransfer(o);if(i===Gt)return e.UNSIGNED_BYTE;if(i===Ua)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ya)return e.UNSIGNED_SHORT_5_5_5_1;if(i===kr)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===zr)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wr)return e.BYTE;if(i===Xr)return e.SHORT;if(i===Tn)return e.UNSIGNED_SHORT;if(i===Oa)return e.INT;if(i===ln)return e.UNSIGNED_INT;if(i===Ft)return e.FLOAT;if(i===An)return e.HALF_FLOAT;if(i===Yr)return e.ALPHA;if(i===Kr)return e.RGB;if(i===Ct)return e.RGBA;if(i===ai)return e.DEPTH_COMPONENT;if(i===Sn)return e.DEPTH_STENCIL;if(i===qr)return e.RED;if(i===Fa)return e.RED_INTEGER;if(i===Zr)return e.RG;if(i===Ba)return e.RG_INTEGER;if(i===Ga)return e.RGBA_INTEGER;if(i===Un||i===yn||i===In||i===Nn)if(u===Qe)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Un)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===In)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nn)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Un)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yn)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===In)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nn)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mi||i===_i||i===gi||i===vi)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===mi)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_i)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gi)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vi)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ei||i===Si||i===Mi)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ei||i===Si)return u===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mi)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ti||i===xi||i===Ai||i===Ri||i===bi||i===Ci||i===Pi||i===Di||i===Li||i===wi||i===Ui||i===yi||i===Ii||i===Ni)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ti)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xi)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ai)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ri)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bi)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ci)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pi)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Di)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Li)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wi)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ui)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yi)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ii)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ni)return u===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oi||i===Fi||i===Bi)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===Oi)return u===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fi)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bi)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gi||i===Hi||i===Vi||i===ki)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===Gi)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hi)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vi)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ki)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cn?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const xd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ad=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Ia(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Ht({vertexShader:xd,fragmentShader:Ad,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Na(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bd extends cr{constructor(n,t){super();const i=this;let o=null,r=1,u=null,f="local-floor",T=1,v=null,P=null,m=null,E=null,A=null,B=null;const L=typeof XRWebGLBinding<"u",l=new Rd,a={},b=t.getContextAttributes();let S=null,_=null;const w=[],x=[],U=new Ze;let V=null;const p=new nn;p.viewport=new ht;const d=new nn;d.viewport=new ht;const R=[p,d],F=new lr;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let q=w[X];return q===void 0&&(q=new Ln,w[X]=q),q.getTargetRaySpace()},this.getControllerGrip=function(X){let q=w[X];return q===void 0&&(q=new Ln,w[X]=q),q.getGripSpace()},this.getHand=function(X){let q=w[X];return q===void 0&&(q=new Ln,w[X]=q),q.getHandSpace()};function I(X){const q=x.indexOf(X.inputSource);if(q===-1)return;const se=w[q];se!==void 0&&(se.update(X.inputSource,X.frame,v||u),se.dispatchEvent({type:X.type,data:X.inputSource}))}function G(){o.removeEventListener("select",I),o.removeEventListener("selectstart",I),o.removeEventListener("selectend",I),o.removeEventListener("squeeze",I),o.removeEventListener("squeezestart",I),o.removeEventListener("squeezeend",I),o.removeEventListener("end",G),o.removeEventListener("inputsourceschange",$);for(let X=0;X<w.length;X++){const q=x[X];q!==null&&(x[X]=null,w[X].disconnect(q))}W=null,Y=null,l.reset();for(const X in a)delete a[X];n.setRenderTarget(S),A=null,E=null,m=null,o=null,_=null,Ve.stop(),i.isPresenting=!1,n.setPixelRatio(V),n.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||u},this.setReferenceSpace=function(X){v=X},this.getBaseLayer=function(){return E!==null?E:A},this.getBinding=function(){return m===null&&L&&(m=new XRWebGLBinding(o,t)),m},this.getFrame=function(){return B},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(S=n.getRenderTarget(),o.addEventListener("select",I),o.addEventListener("selectstart",I),o.addEventListener("selectend",I),o.addEventListener("squeeze",I),o.addEventListener("squeezestart",I),o.addEventListener("squeezeend",I),o.addEventListener("end",G),o.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await t.makeXRCompatible(),V=n.getPixelRatio(),n.getSize(U),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Me=null,pe=null;b.depth&&(pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=b.stencil?Sn:ai,Me=b.stencil?cn:ln);const Oe={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};m=this.getBinding(),E=m.createProjectionLayer(Oe),o.updateRenderState({layers:[E]}),n.setPixelRatio(1),n.setSize(E.textureWidth,E.textureHeight,!1),_=new Zt(E.textureWidth,E.textureHeight,{format:Ct,type:Gt,depthTexture:new Pa(E.textureWidth,E.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:b.stencil,colorSpace:n.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}else{const se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};A=new XRWebGLLayer(o,t,se),o.updateRenderState({baseLayer:A}),n.setPixelRatio(1),n.setSize(A.framebufferWidth,A.framebufferHeight,!1),_=new Zt(A.framebufferWidth,A.framebufferHeight,{format:Ct,type:Gt,colorSpace:n.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:A.ignoreDepthValues===!1,resolveStencilBuffer:A.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(T),v=null,u=await o.requestReferenceSpace(f),Ve.setContext(o),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function $(X){for(let q=0;q<X.removed.length;q++){const se=X.removed[q],Me=x.indexOf(se);Me>=0&&(x[Me]=null,w[Me].disconnect(se))}for(let q=0;q<X.added.length;q++){const se=X.added[q];let Me=x.indexOf(se);if(Me===-1){for(let Oe=0;Oe<w.length;Oe++)if(Oe>=x.length){x.push(se),Me=Oe;break}else if(x[Oe]===null){x[Oe]=se,Me=Oe;break}if(Me===-1)break}const pe=w[Me];pe&&pe.connect(se)}}const H=new Ne,le=new Ne;function Se(X,q,se){H.setFromMatrixPosition(q.matrixWorld),le.setFromMatrixPosition(se.matrixWorld);const Me=H.distanceTo(le),pe=q.projectionMatrix.elements,Oe=se.projectionMatrix.elements,at=pe[14]/(pe[10]-1),g=pe[14]/(pe[10]+1),Ke=(pe[9]+1)/pe[5],Ae=(pe[9]-1)/pe[5],Re=(pe[8]-1)/pe[0],he=(Oe[8]+1)/Oe[0],Je=at*Re,me=at*he,ye=Me/(-Re+he),lt=ye*-Re;if(q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(lt),X.translateZ(ye),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),pe[10]===-1)X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const it=at+ye,h=g+ye,s=Je-lt,y=me+(Me-lt),z=Ke*g/h*it,Z=Ae*g/h*it;X.projectionMatrix.makePerspective(s,y,z,Z,it,h),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function De(X,q){q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let q=X.near,se=X.far;l.texture!==null&&(l.depthNear>0&&(q=l.depthNear),l.depthFar>0&&(se=l.depthFar)),F.near=d.near=p.near=q,F.far=d.far=p.far=se,(W!==F.near||Y!==F.far)&&(o.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,Y=F.far),F.layers.mask=X.layers.mask|6,p.layers.mask=F.layers.mask&3,d.layers.mask=F.layers.mask&5;const Me=X.parent,pe=F.cameras;De(F,Me);for(let Oe=0;Oe<pe.length;Oe++)De(pe[Oe],Me);pe.length===2?Se(F,p,d):F.projectionMatrix.copy(p.projectionMatrix),Ue(X,F,Me)};function Ue(X,q,se){se===null?X.matrix.copy(q.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(E===null&&A===null))return T},this.setFoveation=function(X){T=X,E!==null&&(E.fixedFoveation=X),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=X)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(F)},this.getCameraTexture=function(X){return a[X]};let ke=null;function Ye(X,q){if(P=q.getViewerPose(v||u),B=q,P!==null){const se=P.views;A!==null&&(n.setRenderTargetFramebuffer(_,A.framebuffer),n.setRenderTarget(_));let Me=!1;se.length!==F.cameras.length&&(F.cameras.length=0,Me=!0);for(let g=0;g<se.length;g++){const Ke=se[g];let Ae=null;if(A!==null)Ae=A.getViewport(Ke);else{const he=m.getViewSubImage(E,Ke);Ae=he.viewport,g===0&&(n.setRenderTargetTextures(_,he.colorTexture,he.depthStencilTexture),n.setRenderTarget(_))}let Re=R[g];Re===void 0&&(Re=new nn,Re.layers.enable(g),Re.viewport=new ht,R[g]=Re),Re.matrix.fromArray(Ke.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ke.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),g===0&&(F.matrix.copy(Re.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Me===!0&&F.cameras.push(Re)}const pe=o.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&L){m=i.getBinding();const g=m.getDepthInformation(se[0]);g&&g.isValid&&g.texture&&l.init(g,o.renderState)}if(pe&&pe.includes("camera-access")&&L){n.state.unbindTexture(),m=i.getBinding();for(let g=0;g<se.length;g++){const Ke=se[g].camera;if(Ke){let Ae=a[Ke];Ae||(Ae=new Ia,a[Ke]=Ae);const Re=m.getCameraImage(Ke);Ae.sourceTexture=Re}}}}for(let se=0;se<w.length;se++){const Me=x[se],pe=w[se];Me!==null&&pe!==void 0&&pe.update(Me,q,v||u)}ke&&ke(X,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),B=null}const Ve=new Ka;Ve.setAnimationLoop(Ye),this.setAnimationLoop=function(X){ke=X},this.dispose=function(){}}}const yt=new za,Cd=new on;function Pd(e,n){function t(l,a){l.matrixAutoUpdate===!0&&l.updateMatrix(),a.value.copy(l.matrix)}function i(l,a){a.color.getRGB(l.fogColor.value,Va(e)),a.isFog?(l.fogNear.value=a.near,l.fogFar.value=a.far):a.isFogExp2&&(l.fogDensity.value=a.density)}function o(l,a,b,S,_){a.isMeshBasicMaterial||a.isMeshLambertMaterial?r(l,a):a.isMeshToonMaterial?(r(l,a),m(l,a)):a.isMeshPhongMaterial?(r(l,a),P(l,a)):a.isMeshStandardMaterial?(r(l,a),E(l,a),a.isMeshPhysicalMaterial&&A(l,a,_)):a.isMeshMatcapMaterial?(r(l,a),B(l,a)):a.isMeshDepthMaterial?r(l,a):a.isMeshDistanceMaterial?(r(l,a),L(l,a)):a.isMeshNormalMaterial?r(l,a):a.isLineBasicMaterial?(u(l,a),a.isLineDashedMaterial&&f(l,a)):a.isPointsMaterial?T(l,a,b,S):a.isSpriteMaterial?v(l,a):a.isShadowMaterial?(l.color.value.copy(a.color),l.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}function r(l,a){l.opacity.value=a.opacity,a.color&&l.diffuse.value.copy(a.color),a.emissive&&l.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(l.map.value=a.map,t(a.map,l.mapTransform)),a.alphaMap&&(l.alphaMap.value=a.alphaMap,t(a.alphaMap,l.alphaMapTransform)),a.bumpMap&&(l.bumpMap.value=a.bumpMap,t(a.bumpMap,l.bumpMapTransform),l.bumpScale.value=a.bumpScale,a.side===St&&(l.bumpScale.value*=-1)),a.normalMap&&(l.normalMap.value=a.normalMap,t(a.normalMap,l.normalMapTransform),l.normalScale.value.copy(a.normalScale),a.side===St&&l.normalScale.value.negate()),a.displacementMap&&(l.displacementMap.value=a.displacementMap,t(a.displacementMap,l.displacementMapTransform),l.displacementScale.value=a.displacementScale,l.displacementBias.value=a.displacementBias),a.emissiveMap&&(l.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,l.emissiveMapTransform)),a.specularMap&&(l.specularMap.value=a.specularMap,t(a.specularMap,l.specularMapTransform)),a.alphaTest>0&&(l.alphaTest.value=a.alphaTest);const b=n.get(a),S=b.envMap,_=b.envMapRotation;S&&(l.envMap.value=S,yt.copy(_),yt.x*=-1,yt.y*=-1,yt.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yt.y*=-1,yt.z*=-1),l.envMapRotation.value.setFromMatrix4(Cd.makeRotationFromEuler(yt)),l.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,l.reflectivity.value=a.reflectivity,l.ior.value=a.ior,l.refractionRatio.value=a.refractionRatio),a.lightMap&&(l.lightMap.value=a.lightMap,l.lightMapIntensity.value=a.lightMapIntensity,t(a.lightMap,l.lightMapTransform)),a.aoMap&&(l.aoMap.value=a.aoMap,l.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,l.aoMapTransform))}function u(l,a){l.diffuse.value.copy(a.color),l.opacity.value=a.opacity,a.map&&(l.map.value=a.map,t(a.map,l.mapTransform))}function f(l,a){l.dashSize.value=a.dashSize,l.totalSize.value=a.dashSize+a.gapSize,l.scale.value=a.scale}function T(l,a,b,S){l.diffuse.value.copy(a.color),l.opacity.value=a.opacity,l.size.value=a.size*b,l.scale.value=S*.5,a.map&&(l.map.value=a.map,t(a.map,l.uvTransform)),a.alphaMap&&(l.alphaMap.value=a.alphaMap,t(a.alphaMap,l.alphaMapTransform)),a.alphaTest>0&&(l.alphaTest.value=a.alphaTest)}function v(l,a){l.diffuse.value.copy(a.color),l.opacity.value=a.opacity,l.rotation.value=a.rotation,a.map&&(l.map.value=a.map,t(a.map,l.mapTransform)),a.alphaMap&&(l.alphaMap.value=a.alphaMap,t(a.alphaMap,l.alphaMapTransform)),a.alphaTest>0&&(l.alphaTest.value=a.alphaTest)}function P(l,a){l.specular.value.copy(a.specular),l.shininess.value=Math.max(a.shininess,1e-4)}function m(l,a){a.gradientMap&&(l.gradientMap.value=a.gradientMap)}function E(l,a){l.metalness.value=a.metalness,a.metalnessMap&&(l.metalnessMap.value=a.metalnessMap,t(a.metalnessMap,l.metalnessMapTransform)),l.roughness.value=a.roughness,a.roughnessMap&&(l.roughnessMap.value=a.roughnessMap,t(a.roughnessMap,l.roughnessMapTransform)),a.envMap&&(l.envMapIntensity.value=a.envMapIntensity)}function A(l,a,b){l.ior.value=a.ior,a.sheen>0&&(l.sheenColor.value.copy(a.sheenColor).multiplyScalar(a.sheen),l.sheenRoughness.value=a.sheenRoughness,a.sheenColorMap&&(l.sheenColorMap.value=a.sheenColorMap,t(a.sheenColorMap,l.sheenColorMapTransform)),a.sheenRoughnessMap&&(l.sheenRoughnessMap.value=a.sheenRoughnessMap,t(a.sheenRoughnessMap,l.sheenRoughnessMapTransform))),a.clearcoat>0&&(l.clearcoat.value=a.clearcoat,l.clearcoatRoughness.value=a.clearcoatRoughness,a.clearcoatMap&&(l.clearcoatMap.value=a.clearcoatMap,t(a.clearcoatMap,l.clearcoatMapTransform)),a.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=a.clearcoatRoughnessMap,t(a.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),a.clearcoatNormalMap&&(l.clearcoatNormalMap.value=a.clearcoatNormalMap,t(a.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(a.clearcoatNormalScale),a.side===St&&l.clearcoatNormalScale.value.negate())),a.dispersion>0&&(l.dispersion.value=a.dispersion),a.iridescence>0&&(l.iridescence.value=a.iridescence,l.iridescenceIOR.value=a.iridescenceIOR,l.iridescenceThicknessMinimum.value=a.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=a.iridescenceThicknessRange[1],a.iridescenceMap&&(l.iridescenceMap.value=a.iridescenceMap,t(a.iridescenceMap,l.iridescenceMapTransform)),a.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=a.iridescenceThicknessMap,t(a.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),a.transmission>0&&(l.transmission.value=a.transmission,l.transmissionSamplerMap.value=b.texture,l.transmissionSamplerSize.value.set(b.width,b.height),a.transmissionMap&&(l.transmissionMap.value=a.transmissionMap,t(a.transmissionMap,l.transmissionMapTransform)),l.thickness.value=a.thickness,a.thicknessMap&&(l.thicknessMap.value=a.thicknessMap,t(a.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=a.attenuationDistance,l.attenuationColor.value.copy(a.attenuationColor)),a.anisotropy>0&&(l.anisotropyVector.value.set(a.anisotropy*Math.cos(a.anisotropyRotation),a.anisotropy*Math.sin(a.anisotropyRotation)),a.anisotropyMap&&(l.anisotropyMap.value=a.anisotropyMap,t(a.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=a.specularIntensity,l.specularColor.value.copy(a.specularColor),a.specularColorMap&&(l.specularColorMap.value=a.specularColorMap,t(a.specularColorMap,l.specularColorMapTransform)),a.specularIntensityMap&&(l.specularIntensityMap.value=a.specularIntensityMap,t(a.specularIntensityMap,l.specularIntensityMapTransform))}function B(l,a){a.matcap&&(l.matcap.value=a.matcap)}function L(l,a){const b=n.get(a).light;l.referencePosition.value.setFromMatrixPosition(b.matrixWorld),l.nearDistance.value=b.shadow.camera.near,l.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Dd(e,n,t,i){let o={},r={},u=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function T(b,S){const _=S.program;i.uniformBlockBinding(b,_)}function v(b,S){let _=o[b.id];_===void 0&&(B(b),_=P(b),o[b.id]=_,b.addEventListener("dispose",l));const w=S.program;i.updateUBOMapping(b,w);const x=n.render.frame;r[b.id]!==x&&(E(b),r[b.id]=x)}function P(b){const S=m();b.__bindingPointIndex=S;const _=e.createBuffer(),w=b.__size,x=b.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,w,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,_),_}function m(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function E(b){const S=o[b.id],_=b.uniforms,w=b.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let x=0,U=_.length;x<U;x++){const V=Array.isArray(_[x])?_[x]:[_[x]];for(let p=0,d=V.length;p<d;p++){const R=V[p];if(A(R,x,p,w)===!0){const F=R.__offset,W=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let I=0;I<W.length;I++){const G=W[I],$=L(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,F+Y,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function A(b,S,_,w){const x=b.value,U=S+"_"+_;if(w[U]===void 0)return typeof x=="number"||typeof x=="boolean"?w[U]=x:w[U]=x.clone(),!0;{const V=w[U];if(typeof x=="number"||typeof x=="boolean"){if(V!==x)return w[U]=x,!0}else if(V.equals(x)===!1)return V.copy(x),!0}return!1}function B(b){const S=b.uniforms;let _=0;const w=16;for(let U=0,V=S.length;U<V;U++){const p=Array.isArray(S[U])?S[U]:[S[U]];for(let d=0,R=p.length;d<R;d++){const F=p[d],W=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,I=W.length;Y<I;Y++){const G=W[Y],$=L(G),H=_%w,le=H%$.boundary,Se=H+le;_+=le,Se!==0&&w-Se<$.storage&&(_+=w-Se),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=$.storage}}}const x=_%w;return x>0&&(_+=w-x),b.__size=_,b.__cache={},this}function L(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function l(b){const S=b.target;S.removeEventListener("dispose",l);const _=u.indexOf(S.__bindingPointIndex);u.splice(_,1),e.deleteBuffer(o[S.id]),delete o[S.id],delete r[S.id]}function a(){for(const b in o)e.deleteBuffer(o[b]);u=[],o={},r={}}return{bind:T,update:v,dispose:a}}class Ld{constructor(n={}){const{canvas:t=rr(),context:i=null,depth:o=!0,stencil:r=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:T=!0,preserveDrawingBuffer:v=!1,powerPreference:P="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:E=!1}=n;this.isWebGLRenderer=!0;let A;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=i.getContextAttributes().alpha}else A=u;const B=new Uint32Array(4),L=new Int32Array(4);let l=null,a=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let w=!1;this._outputColorSpace=ba;let x=0,U=0,V=null,p=-1,d=null;const R=new ht,F=new ht;let W=null;const Y=new $e(0);let I=0,G=t.width,$=t.height,H=1,le=null,Se=null;const De=new ht(0,0,G,$),Ue=new ht(0,0,G,$);let ke=!1;const Ye=new Ca;let Ve=!1,X=!1;const q=new on,se=new Ne,Me=new ht,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function at(){return V===null?H:1}let g=i;function Ke(c,C){return t.getContext(c,C)}try{const c={alpha:!0,depth:o,stencil:r,antialias:f,premultipliedAlpha:T,preserveDrawingBuffer:v,powerPreference:P,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${or}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",j,!1),g===null){const C="webgl2";if(g=Ke(C,c),g===null)throw Ke(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(c){throw console.error("THREE.WebGLRenderer: "+c.message),c}let Ae,Re,he,Je,me,ye,lt,it,h,s,y,z,Z,k,Ee,te,_e,ge,J,oe,Ce,ve,ae,we;function M(){Ae=new Gl(g),Ae.init(),ve=new Td(g,Ae),Re=new Ul(g,Ae,n,ve),he=new Sd(g,Ae),Re.reversedDepthBuffer&&E&&he.buffers.depth.setReversed(!0),Je=new kl(g),me=new sd,ye=new Md(g,Ae,he,me,Re,ve,Je),lt=new Il(_),it=new Bl(_),h=new qo(g),ae=new Ll(g,h),s=new Hl(g,h,Je,ae),y=new Wl(g,s,h,Je),J=new zl(g,Re,ye),te=new yl(me),z=new od(_,lt,it,Ae,Re,ae,te),Z=new Pd(_,me),k=new ld,Ee=new md(Ae),ge=new Dl(_,lt,it,he,y,A,T),_e=new vd(_,y,Re),we=new Dd(g,Je,Re,he),oe=new wl(g,Ae,Je),Ce=new Vl(g,Ae,Je),Je.programs=z.programs,_.capabilities=Re,_.extensions=Ae,_.properties=me,_.renderLists=k,_.shadowMap=_e,_.state=he,_.info=Je}M();const ee=new bd(_,g);this.xr=ee,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const c=Ae.get("WEBGL_lose_context");c&&c.loseContext()},this.forceContextRestore=function(){const c=Ae.get("WEBGL_lose_context");c&&c.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(c){c!==void 0&&(H=c,this.setSize(G,$,!1))},this.getSize=function(c){return c.set(G,$)},this.setSize=function(c,C,N=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=c,$=C,t.width=Math.floor(c*H),t.height=Math.floor(C*H),N===!0&&(t.style.width=c+"px",t.style.height=C+"px"),this.setViewport(0,0,c,C)},this.getDrawingBufferSize=function(c){return c.set(G*H,$*H).floor()},this.setDrawingBufferSize=function(c,C,N){G=c,$=C,H=N,t.width=Math.floor(c*N),t.height=Math.floor(C*N),this.setViewport(0,0,c,C)},this.getCurrentViewport=function(c){return c.copy(R)},this.getViewport=function(c){return c.copy(De)},this.setViewport=function(c,C,N,O){c.isVector4?De.set(c.x,c.y,c.z,c.w):De.set(c,C,N,O),he.viewport(R.copy(De).multiplyScalar(H).round())},this.getScissor=function(c){return c.copy(Ue)},this.setScissor=function(c,C,N,O){c.isVector4?Ue.set(c.x,c.y,c.z,c.w):Ue.set(c,C,N,O),he.scissor(F.copy(Ue).multiplyScalar(H).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(c){he.setScissorTest(ke=c)},this.setOpaqueSort=function(c){le=c},this.setTransparentSort=function(c){Se=c},this.getClearColor=function(c){return c.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(c=!0,C=!0,N=!0){let O=0;if(c){let D=!1;if(V!==null){const Q=V.texture.format;D=Q===Ga||Q===Ba||Q===Fa}if(D){const Q=V.texture.type,re=Q===Gt||Q===ln||Q===Tn||Q===cn||Q===Ua||Q===ya,de=ge.getClearColor(),ce=ge.getClearAlpha(),be=de.r,Pe=de.g,Te=de.b;re?(B[0]=be,B[1]=Pe,B[2]=Te,B[3]=ce,g.clearBufferuiv(g.COLOR,0,B)):(L[0]=be,L[1]=Pe,L[2]=Te,L[3]=ce,g.clearBufferiv(g.COLOR,0,L))}else O|=g.COLOR_BUFFER_BIT}C&&(O|=g.DEPTH_BUFFER_BIT),N&&(O|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",j,!1),ge.dispose(),k.dispose(),Ee.dispose(),me.dispose(),lt.dispose(),it.dispose(),y.dispose(),ae.dispose(),we.dispose(),z.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Mt),ee.removeEventListener("sessionend",ci),Lt.stop()};function ne(c){c.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const c=Je.autoReset,C=_e.enabled,N=_e.autoUpdate,O=_e.needsUpdate,D=_e.type;M(),Je.autoReset=c,_e.enabled=C,_e.autoUpdate=N,_e.needsUpdate=O,_e.type=D}function j(c){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",c.statusMessage)}function K(c){const C=c.target;C.removeEventListener("dispose",K),ue(C)}function ue(c){Le(c),me.remove(c)}function Le(c){const C=me.get(c).programs;C!==void 0&&(C.forEach(function(N){z.releaseProgram(N)}),c.isShaderMaterial&&z.releaseShaderCache(c))}this.renderBufferDirect=function(c,C,N,O,D,Q){C===null&&(C=pe);const re=D.isMesh&&D.matrixWorld.determinant()<0,de=Ja(c,C,N,O,D);he.setMaterial(O,re);let ce=N.index,be=1;if(O.wireframe===!0){if(ce=s.getWireframeAttribute(N),ce===void 0)return;be=2}const Pe=N.drawRange,Te=N.attributes.position;let Fe=Pe.start*be,ze=(Pe.start+Pe.count)*be;Q!==null&&(Fe=Math.max(Fe,Q.start*be),ze=Math.min(ze,(Q.start+Q.count)*be)),ce!==null?(Fe=Math.max(Fe,0),ze=Math.min(ze,ce.count)):Te!=null&&(Fe=Math.max(Fe,0),ze=Math.min(ze,Te.count));const nt=ze-Fe;if(nt<0||nt===1/0)return;ae.setup(D,O,de,N,ce);let je,Xe=oe;if(ce!==null&&(je=h.get(ce),Xe=Ce,Xe.setIndex(je)),D.isMesh)O.wireframe===!0?(he.setLineWidth(O.wireframeLinewidth*at()),Xe.setMode(g.LINES)):Xe.setMode(g.TRIANGLES);else if(D.isLine){let xe=O.linewidth;xe===void 0&&(xe=1),he.setLineWidth(xe*at()),D.isLineSegments?Xe.setMode(g.LINES):D.isLineLoop?Xe.setMode(g.LINE_LOOP):Xe.setMode(g.LINE_STRIP)}else D.isPoints?Xe.setMode(g.POINTS):D.isSprite&&Xe.setMode(g.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Yn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Xe.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Xe.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xe=D._multiDrawStarts,et=D._multiDrawCounts,Be=D._multiDrawCount,_t=ce?h.get(ce).bytesPerElement:1,Vt=me.get(O).currentProgram.getUniforms();for(let gt=0;gt<Be;gt++)Vt.setValue(g,"_gl_DrawID",gt),Xe.render(xe[gt]/_t,et[gt])}else if(D.isInstancedMesh)Xe.renderInstances(Fe,nt,D.count);else if(N.isInstancedBufferGeometry){const xe=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,et=Math.min(N.instanceCount,xe);Xe.renderInstances(Fe,nt,et)}else Xe.render(Fe,nt)};function qe(c,C,N){c.transparent===!0&&c.side===bt&&c.forceSinglePass===!1?(c.side=St,c.needsUpdate=!0,un(c,C,N),c.side=sn,c.needsUpdate=!0,un(c,C,N),c.side=bt):un(c,C,N)}this.compile=function(c,C,N=null){N===null&&(N=c),a=Ee.get(N),a.init(C),S.push(a),N.traverseVisible(function(D){D.isLight&&D.layers.test(C.layers)&&(a.pushLight(D),D.castShadow&&a.pushShadow(D))}),c!==N&&c.traverseVisible(function(D){D.isLight&&D.layers.test(C.layers)&&(a.pushLight(D),D.castShadow&&a.pushShadow(D))}),a.setupLights();const O=new Set;return c.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const Q=D.material;if(Q)if(Array.isArray(Q))for(let re=0;re<Q.length;re++){const de=Q[re];qe(de,N,D),O.add(de)}else qe(Q,N,D),O.add(Q)}),a=S.pop(),O},this.compileAsync=function(c,C,N=null){const O=this.compile(c,C,N);return new Promise(D=>{function Q(){if(O.forEach(function(re){me.get(re).currentProgram.isReady()&&O.delete(re)}),O.size===0){D(c);return}setTimeout(Q,10)}Ae.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let He=null;function At(c){He&&He(c)}function Mt(){Lt.stop()}function ci(){Lt.start()}const Lt=new Ka;Lt.setAnimationLoop(At),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(c){He=c,ee.setAnimationLoop(c),c===null?Lt.stop():Lt.start()},ee.addEventListener("sessionstart",Mt),ee.addEventListener("sessionend",ci),this.render=function(c,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(c.matrixWorldAutoUpdate===!0&&c.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(C),C=ee.getCamera()),c.isScene===!0&&c.onBeforeRender(_,c,C,V),a=Ee.get(c,S.length),a.init(C),S.push(a),q.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),Ye.setFromProjectionMatrix(q,hi,C.reversedDepth),X=this.localClippingEnabled,Ve=te.init(this.clippingPlanes,X),l=k.get(c,b.length),l.init(),b.push(l),ee.enabled===!0&&ee.isPresenting===!0){const Q=_.xr.getDepthSensingMesh();Q!==null&&Pn(Q,C,-1/0,_.sortObjects)}Pn(c,C,0,_.sortObjects),l.finish(),_.sortObjects===!0&&l.sort(le,Se),Oe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Oe&&ge.addToRenderList(l,c),this.info.render.frame++,Ve===!0&&te.beginShadows();const N=a.state.shadowsArray;_e.render(N,c,C),Ve===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=l.opaque,D=l.transmissive;if(a.setupLights(),C.isArrayCamera){const Q=C.cameras;if(D.length>0)for(let re=0,de=Q.length;re<de;re++){const ce=Q[re];fi(O,D,c,ce)}Oe&&ge.render(c);for(let re=0,de=Q.length;re<de;re++){const ce=Q[re];li(l,c,ce,ce.viewport)}}else D.length>0&&fi(O,D,c,C),Oe&&ge.render(c),li(l,c,C);V!==null&&U===0&&(ye.updateMultisampleRenderTarget(V),ye.updateRenderTargetMipmap(V)),c.isScene===!0&&c.onAfterRender(_,c,C),ae.resetDefaultState(),p=-1,d=null,S.pop(),S.length>0?(a=S[S.length-1],Ve===!0&&te.setGlobalState(_.clippingPlanes,a.state.camera)):a=null,b.pop(),b.length>0?l=b[b.length-1]:l=null};function Pn(c,C,N,O){if(c.visible===!1)return;if(c.layers.test(C.layers)){if(c.isGroup)N=c.renderOrder;else if(c.isLOD)c.autoUpdate===!0&&c.update(C);else if(c.isLight)a.pushLight(c),c.castShadow&&a.pushShadow(c);else if(c.isSprite){if(!c.frustumCulled||Ye.intersectsSprite(c)){O&&Me.setFromMatrixPosition(c.matrixWorld).applyMatrix4(q);const re=y.update(c),de=c.material;de.visible&&l.push(c,re,de,N,Me.z,null)}}else if((c.isMesh||c.isLine||c.isPoints)&&(!c.frustumCulled||Ye.intersectsObject(c))){const re=y.update(c),de=c.material;if(O&&(c.boundingSphere!==void 0?(c.boundingSphere===null&&c.computeBoundingSphere(),Me.copy(c.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),Me.copy(re.boundingSphere.center)),Me.applyMatrix4(c.matrixWorld).applyMatrix4(q)),Array.isArray(de)){const ce=re.groups;for(let be=0,Pe=ce.length;be<Pe;be++){const Te=ce[be],Fe=de[Te.materialIndex];Fe&&Fe.visible&&l.push(c,re,Fe,N,Me.z,Te)}}else de.visible&&l.push(c,re,de,N,Me.z,null)}}const Q=c.children;for(let re=0,de=Q.length;re<de;re++)Pn(Q[re],C,N,O)}function li(c,C,N,O){const D=c.opaque,Q=c.transmissive,re=c.transparent;a.setupLightsView(N),Ve===!0&&te.setGlobalState(_.clippingPlanes,N),O&&he.viewport(R.copy(O)),D.length>0&&dn(D,C,N),Q.length>0&&dn(Q,C,N),re.length>0&&dn(re,C,N),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function fi(c,C,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;a.state.transmissionRenderTarget[O.id]===void 0&&(a.state.transmissionRenderTarget[O.id]=new Zt(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?An:Gt,minFilter:en,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Q=a.state.transmissionRenderTarget[O.id],re=O.viewport||R;Q.setSize(re.z*_.transmissionResolutionScale,re.w*_.transmissionResolutionScale);const de=_.getRenderTarget(),ce=_.getActiveCubeFace(),be=_.getActiveMipmapLevel();_.setRenderTarget(Q),_.getClearColor(Y),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear(),Oe&&ge.render(N);const Pe=_.toneMapping;_.toneMapping=Dt;const Te=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),a.setupLightsView(O),Ve===!0&&te.setGlobalState(_.clippingPlanes,O),dn(c,N,O),ye.updateMultisampleRenderTarget(Q),ye.updateRenderTargetMipmap(Q),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ze=0,nt=C.length;ze<nt;ze++){const je=C[ze],Xe=je.object,xe=je.geometry,et=je.material,Be=je.group;if(et.side===bt&&Xe.layers.test(O.layers)){const _t=et.side;et.side=St,et.needsUpdate=!0,di(Xe,N,O,xe,et,Be),et.side=_t,et.needsUpdate=!0,Fe=!0}}Fe===!0&&(ye.updateMultisampleRenderTarget(Q),ye.updateRenderTargetMipmap(Q))}_.setRenderTarget(de,ce,be),_.setClearColor(Y,I),Te!==void 0&&(O.viewport=Te),_.toneMapping=Pe}function dn(c,C,N){const O=C.isScene===!0?C.overrideMaterial:null;for(let D=0,Q=c.length;D<Q;D++){const re=c[D],de=re.object,ce=re.geometry,be=re.group;let Pe=re.material;Pe.allowOverride===!0&&O!==null&&(Pe=O),de.layers.test(N.layers)&&di(de,C,N,ce,Pe,be)}}function di(c,C,N,O,D,Q){c.onBeforeRender(_,C,N,O,D,Q),c.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,c.matrixWorld),c.normalMatrix.getNormalMatrix(c.modelViewMatrix),D.onBeforeRender(_,C,N,O,c,Q),D.transparent===!0&&D.side===bt&&D.forceSinglePass===!1?(D.side=St,D.needsUpdate=!0,_.renderBufferDirect(N,C,O,D,c,Q),D.side=sn,D.needsUpdate=!0,_.renderBufferDirect(N,C,O,D,c,Q),D.side=bt):_.renderBufferDirect(N,C,O,D,c,Q),c.onAfterRender(_,C,N,O,D,Q)}function un(c,C,N){C.isScene!==!0&&(C=pe);const O=me.get(c),D=a.state.lights,Q=a.state.shadowsArray,re=D.state.version,de=z.getParameters(c,D.state,Q,C,N),ce=z.getProgramCacheKey(de);let be=O.programs;O.environment=c.isMeshStandardMaterial?C.environment:null,O.fog=C.fog,O.envMap=(c.isMeshStandardMaterial?it:lt).get(c.envMap||O.environment),O.envMapRotation=O.environment!==null&&c.envMap===null?C.environmentRotation:c.envMapRotation,be===void 0&&(c.addEventListener("dispose",K),be=new Map,O.programs=be);let Pe=be.get(ce);if(Pe!==void 0){if(O.currentProgram===Pe&&O.lightsStateVersion===re)return pi(c,de),Pe}else de.uniforms=z.getUniforms(c),c.onBeforeCompile(de,_),Pe=z.acquireProgram(de,ce),be.set(ce,Pe),O.uniforms=de.uniforms;const Te=O.uniforms;return(!c.isShaderMaterial&&!c.isRawShaderMaterial||c.clipping===!0)&&(Te.clippingPlanes=te.uniform),pi(c,de),O.needsLights=tr(c),O.lightsStateVersion=re,O.needsLights&&(Te.ambientLightColor.value=D.state.ambient,Te.lightProbe.value=D.state.probe,Te.directionalLights.value=D.state.directional,Te.directionalLightShadows.value=D.state.directionalShadow,Te.spotLights.value=D.state.spot,Te.spotLightShadows.value=D.state.spotShadow,Te.rectAreaLights.value=D.state.rectArea,Te.ltc_1.value=D.state.rectAreaLTC1,Te.ltc_2.value=D.state.rectAreaLTC2,Te.pointLights.value=D.state.point,Te.pointLightShadows.value=D.state.pointShadow,Te.hemisphereLights.value=D.state.hemi,Te.directionalShadowMap.value=D.state.directionalShadowMap,Te.directionalShadowMatrix.value=D.state.directionalShadowMatrix,Te.spotShadowMap.value=D.state.spotShadowMap,Te.spotLightMatrix.value=D.state.spotLightMatrix,Te.spotLightMap.value=D.state.spotLightMap,Te.pointShadowMap.value=D.state.pointShadowMap,Te.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=Pe,O.uniformsList=null,Pe}function ui(c){if(c.uniformsList===null){const C=c.currentProgram.getUniforms();c.uniformsList=En.seqWithValue(C.seq,c.uniforms)}return c.uniformsList}function pi(c,C){const N=me.get(c);N.outputColorSpace=C.outputColorSpace,N.batching=C.batching,N.batchingColor=C.batchingColor,N.instancing=C.instancing,N.instancingColor=C.instancingColor,N.instancingMorph=C.instancingMorph,N.skinning=C.skinning,N.morphTargets=C.morphTargets,N.morphNormals=C.morphNormals,N.morphColors=C.morphColors,N.morphTargetsCount=C.morphTargetsCount,N.numClippingPlanes=C.numClippingPlanes,N.numIntersection=C.numClipIntersection,N.vertexAlphas=C.vertexAlphas,N.vertexTangents=C.vertexTangents,N.toneMapping=C.toneMapping}function Ja(c,C,N,O,D){C.isScene!==!0&&(C=pe),ye.resetTextureUnits();const Q=C.fog,re=O.isMeshStandardMaterial?C.environment:null,de=V===null?_.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Rn,ce=(O.isMeshStandardMaterial?it:lt).get(O.envMap||re),be=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Pe=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Te=!!N.morphAttributes.position,Fe=!!N.morphAttributes.normal,ze=!!N.morphAttributes.color;let nt=Dt;O.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(nt=_.toneMapping);const je=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Xe=je!==void 0?je.length:0,xe=me.get(O),et=a.state.lights;if(Ve===!0&&(X===!0||c!==d)){const ft=c===d&&O.id===p;te.setState(O,c,ft)}let Be=!1;O.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==et.state.version||xe.outputColorSpace!==de||D.isBatchedMesh&&xe.batching===!1||!D.isBatchedMesh&&xe.batching===!0||D.isBatchedMesh&&xe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xe.instancing===!1||!D.isInstancedMesh&&xe.instancing===!0||D.isSkinnedMesh&&xe.skinning===!1||!D.isSkinnedMesh&&xe.skinning===!0||D.isInstancedMesh&&xe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xe.instancingMorph===!1&&D.morphTexture!==null||xe.envMap!==ce||O.fog===!0&&xe.fog!==Q||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==te.numPlanes||xe.numIntersection!==te.numIntersection)||xe.vertexAlphas!==be||xe.vertexTangents!==Pe||xe.morphTargets!==Te||xe.morphNormals!==Fe||xe.morphColors!==ze||xe.toneMapping!==nt||xe.morphTargetsCount!==Xe)&&(Be=!0):(Be=!0,xe.__version=O.version);let _t=xe.currentProgram;Be===!0&&(_t=un(O,C,D));let Vt=!1,gt=!1,Qt=!1;const tt=_t.getUniforms(),vt=xe.uniforms;if(he.useProgram(_t.program)&&(Vt=!0,gt=!0,Qt=!0),O.id!==p&&(p=O.id,gt=!0),Vt||d!==c){he.buffers.depth.getReversed()&&c.reversedDepth!==!0&&(c._reversedDepth=!0,c.updateProjectionMatrix()),tt.setValue(g,"projectionMatrix",c.projectionMatrix),tt.setValue(g,"viewMatrix",c.matrixWorldInverse);const dt=tt.map.cameraPosition;dt!==void 0&&dt.setValue(g,se.setFromMatrixPosition(c.matrixWorld)),Re.logarithmicDepthBuffer&&tt.setValue(g,"logDepthBufFC",2/(Math.log(c.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&tt.setValue(g,"isOrthographic",c.isOrthographicCamera===!0),d!==c&&(d=c,gt=!0,Qt=!0)}if(D.isSkinnedMesh){tt.setOptional(g,D,"bindMatrix"),tt.setOptional(g,D,"bindMatrixInverse");const ft=D.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),tt.setValue(g,"boneTexture",ft.boneTexture,ye))}D.isBatchedMesh&&(tt.setOptional(g,D,"batchingTexture"),tt.setValue(g,"batchingTexture",D._matricesTexture,ye),tt.setOptional(g,D,"batchingIdTexture"),tt.setValue(g,"batchingIdTexture",D._indirectTexture,ye),tt.setOptional(g,D,"batchingColorTexture"),D._colorsTexture!==null&&tt.setValue(g,"batchingColorTexture",D._colorsTexture,ye));const Et=N.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&J.update(D,N,_t),(gt||xe.receiveShadow!==D.receiveShadow)&&(xe.receiveShadow=D.receiveShadow,tt.setValue(g,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(vt.envMap.value=ce,vt.flipEnvMap.value=ce.isCubeTexture&&ce.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&C.environment!==null&&(vt.envMapIntensity.value=C.environmentIntensity),gt&&(tt.setValue(g,"toneMappingExposure",_.toneMappingExposure),xe.needsLights&&er(vt,Qt),Q&&O.fog===!0&&Z.refreshFogUniforms(vt,Q),Z.refreshMaterialUniforms(vt,O,H,$,a.state.transmissionRenderTarget[c.id]),En.upload(g,ui(xe),vt,ye)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(En.upload(g,ui(xe),vt,ye),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&tt.setValue(g,"center",D.center),tt.setValue(g,"modelViewMatrix",D.modelViewMatrix),tt.setValue(g,"normalMatrix",D.normalMatrix),tt.setValue(g,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ft=O.uniformsGroups;for(let dt=0,Dn=ft.length;dt<Dn;dt++){const wt=ft[dt];we.update(wt,_t),we.bind(wt,_t)}}return _t}function er(c,C){c.ambientLightColor.needsUpdate=C,c.lightProbe.needsUpdate=C,c.directionalLights.needsUpdate=C,c.directionalLightShadows.needsUpdate=C,c.pointLights.needsUpdate=C,c.pointLightShadows.needsUpdate=C,c.spotLights.needsUpdate=C,c.spotLightShadows.needsUpdate=C,c.rectAreaLights.needsUpdate=C,c.hemisphereLights.needsUpdate=C}function tr(c){return c.isMeshLambertMaterial||c.isMeshToonMaterial||c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isShadowMaterial||c.isShaderMaterial&&c.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(c,C,N){const O=me.get(c);O.__autoAllocateDepthBuffer=c.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),me.get(c.texture).__webglTexture=C,me.get(c.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:N,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(c,C){const N=me.get(c);N.__webglFramebuffer=C,N.__useDefaultFramebuffer=C===void 0};const nr=g.createFramebuffer();this.setRenderTarget=function(c,C=0,N=0){V=c,x=C,U=N;let O=!0,D=null,Q=!1,re=!1;if(c){const ce=me.get(c);if(ce.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(g.FRAMEBUFFER,null),O=!1;else if(ce.__webglFramebuffer===void 0)ye.setupRenderTarget(c);else if(ce.__hasExternalTextures)ye.rebindTextures(c,me.get(c.texture).__webglTexture,me.get(c.depthTexture).__webglTexture);else if(c.depthBuffer){const Te=c.depthTexture;if(ce.__boundDepthTexture!==Te){if(Te!==null&&me.has(Te)&&(c.width!==Te.image.width||c.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(c)}}const be=c.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(re=!0);const Pe=me.get(c).__webglFramebuffer;c.isWebGLCubeRenderTarget?(Array.isArray(Pe[C])?D=Pe[C][N]:D=Pe[C],Q=!0):c.samples>0&&ye.useMultisampledRTT(c)===!1?D=me.get(c).__webglMultisampledFramebuffer:Array.isArray(Pe)?D=Pe[N]:D=Pe,R.copy(c.viewport),F.copy(c.scissor),W=c.scissorTest}else R.copy(De).multiplyScalar(H).floor(),F.copy(Ue).multiplyScalar(H).floor(),W=ke;if(N!==0&&(D=nr),he.bindFramebuffer(g.FRAMEBUFFER,D)&&O&&he.drawBuffers(c,D),he.viewport(R),he.scissor(F),he.setScissorTest(W),Q){const ce=me.get(c.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+C,ce.__webglTexture,N)}else if(re){const ce=C;for(let be=0;be<c.textures.length;be++){const Pe=me.get(c.textures[be]);g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0+be,Pe.__webglTexture,N,ce)}}else if(c!==null&&N!==0){const ce=me.get(c.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,ce.__webglTexture,N)}p=-1},this.readRenderTargetPixels=function(c,C,N,O,D,Q,re,de=0){if(!(c&&c.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ce=me.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&re!==void 0&&(ce=ce[re]),ce){he.bindFramebuffer(g.FRAMEBUFFER,ce);try{const be=c.textures[de],Pe=be.format,Te=be.type;if(!Re.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=c.width-O&&N>=0&&N<=c.height-D&&(c.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+de),g.readPixels(C,N,O,D,ve.convert(Pe),ve.convert(Te),Q))}finally{const be=V!==null?me.get(V).__webglFramebuffer:null;he.bindFramebuffer(g.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(c,C,N,O,D,Q,re,de=0){if(!(c&&c.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ce=me.get(c).__webglFramebuffer;if(c.isWebGLCubeRenderTarget&&re!==void 0&&(ce=ce[re]),ce)if(C>=0&&C<=c.width-O&&N>=0&&N<=c.height-D){he.bindFramebuffer(g.FRAMEBUFFER,ce);const be=c.textures[de],Pe=be.format,Te=be.type;if(!Re.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Fe=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Fe),g.bufferData(g.PIXEL_PACK_BUFFER,Q.byteLength,g.STREAM_READ),c.textures.length>1&&g.readBuffer(g.COLOR_ATTACHMENT0+de),g.readPixels(C,N,O,D,ve.convert(Pe),ve.convert(Te),0);const ze=V!==null?me.get(V).__webglFramebuffer:null;he.bindFramebuffer(g.FRAMEBUFFER,ze);const nt=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await sr(g,nt,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Fe),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Q),g.deleteBuffer(Fe),g.deleteSync(nt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(c,C=null,N=0){const O=Math.pow(2,-N),D=Math.floor(c.image.width*O),Q=Math.floor(c.image.height*O),re=C!==null?C.x:0,de=C!==null?C.y:0;ye.setTexture2D(c,0),g.copyTexSubImage2D(g.TEXTURE_2D,N,0,0,re,de,D,Q),he.unbindTexture()};const ir=g.createFramebuffer(),ar=g.createFramebuffer();this.copyTextureToTexture=function(c,C,N=null,O=null,D=0,Q=null){Q===null&&(D!==0?(Yn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=D,D=0):Q=0);let re,de,ce,be,Pe,Te,Fe,ze,nt;const je=c.isCompressedTexture?c.mipmaps[Q]:c.image;if(N!==null)re=N.max.x-N.min.x,de=N.max.y-N.min.y,ce=N.isBox3?N.max.z-N.min.z:1,be=N.min.x,Pe=N.min.y,Te=N.isBox3?N.min.z:0;else{const Et=Math.pow(2,-D);re=Math.floor(je.width*Et),de=Math.floor(je.height*Et),c.isDataArrayTexture?ce=je.depth:c.isData3DTexture?ce=Math.floor(je.depth*Et):ce=1,be=0,Pe=0,Te=0}O!==null?(Fe=O.x,ze=O.y,nt=O.z):(Fe=0,ze=0,nt=0);const Xe=ve.convert(C.format),xe=ve.convert(C.type);let et;C.isData3DTexture?(ye.setTexture3D(C,0),et=g.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(ye.setTexture2DArray(C,0),et=g.TEXTURE_2D_ARRAY):(ye.setTexture2D(C,0),et=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,C.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,C.unpackAlignment);const Be=g.getParameter(g.UNPACK_ROW_LENGTH),_t=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Vt=g.getParameter(g.UNPACK_SKIP_PIXELS),gt=g.getParameter(g.UNPACK_SKIP_ROWS),Qt=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,je.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,je.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,be),g.pixelStorei(g.UNPACK_SKIP_ROWS,Pe),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Te);const tt=c.isDataArrayTexture||c.isData3DTexture,vt=C.isDataArrayTexture||C.isData3DTexture;if(c.isDepthTexture){const Et=me.get(c),ft=me.get(C),dt=me.get(Et.__renderTarget),Dn=me.get(ft.__renderTarget);he.bindFramebuffer(g.READ_FRAMEBUFFER,dt.__webglFramebuffer),he.bindFramebuffer(g.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let wt=0;wt<ce;wt++)tt&&(g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,me.get(c).__webglTexture,D,Te+wt),g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,me.get(C).__webglTexture,Q,nt+wt)),g.blitFramebuffer(be,Pe,re,de,Fe,ze,re,de,g.DEPTH_BUFFER_BIT,g.NEAREST);he.bindFramebuffer(g.READ_FRAMEBUFFER,null),he.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else if(D!==0||c.isRenderTargetTexture||me.has(c)){const Et=me.get(c),ft=me.get(C);he.bindFramebuffer(g.READ_FRAMEBUFFER,ir),he.bindFramebuffer(g.DRAW_FRAMEBUFFER,ar);for(let dt=0;dt<ce;dt++)tt?g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,Et.__webglTexture,D,Te+dt):g.framebufferTexture2D(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,Et.__webglTexture,D),vt?g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,ft.__webglTexture,Q,nt+dt):g.framebufferTexture2D(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_2D,ft.__webglTexture,Q),D!==0?g.blitFramebuffer(be,Pe,re,de,Fe,ze,re,de,g.COLOR_BUFFER_BIT,g.NEAREST):vt?g.copyTexSubImage3D(et,Q,Fe,ze,nt+dt,be,Pe,re,de):g.copyTexSubImage2D(et,Q,Fe,ze,be,Pe,re,de);he.bindFramebuffer(g.READ_FRAMEBUFFER,null),he.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else vt?c.isDataTexture||c.isData3DTexture?g.texSubImage3D(et,Q,Fe,ze,nt,re,de,ce,Xe,xe,je.data):C.isCompressedArrayTexture?g.compressedTexSubImage3D(et,Q,Fe,ze,nt,re,de,ce,Xe,je.data):g.texSubImage3D(et,Q,Fe,ze,nt,re,de,ce,Xe,xe,je):c.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Q,Fe,ze,re,de,Xe,xe,je.data):c.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Q,Fe,ze,je.width,je.height,Xe,je.data):g.texSubImage2D(g.TEXTURE_2D,Q,Fe,ze,re,de,Xe,xe,je);g.pixelStorei(g.UNPACK_ROW_LENGTH,Be),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,_t),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Vt),g.pixelStorei(g.UNPACK_SKIP_ROWS,gt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Qt),Q===0&&C.generateMipmaps&&g.generateMipmap(et),he.unbindTexture()},this.initRenderTarget=function(c){me.get(c).__webglFramebuffer===void 0&&ye.setupRenderTarget(c)},this.initTexture=function(c){c.isCubeTexture?ye.setTextureCube(c,0):c.isData3DTexture?ye.setTexture3D(c,0):c.isDataArrayTexture||c.isCompressedArrayTexture?ye.setTexture2DArray(c,0):ye.setTexture2D(c,0),he.unbindTexture()},this.resetState=function(){x=0,U=0,V=null,he.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(n),t.unpackColorSpace=rt._getUnpackColorSpace()}}const wd=({refs:e,projection:n,scene:t,nodes:i})=>{const o=new Ze,r=new bo,{onSelectRef:u,onHoverRef:f,targetOffsetRef:T}=e,{minOffset:v,maxOffset:P}=n,{renderer:m,camera:E,controls:A}=t,{interactiveMeshes:B}=i,L={current:null},l=(I,G)=>{const $=m.domElement.getBoundingClientRect();o.x=(I-$.left)/$.width*2-1,o.y=-((G-$.top)/$.height)*2+1,r.setFromCamera(o,E);const H=r.intersectObjects(B,!1)[0];return H?H.object.userData.event??null:null};let a=null,b=0,S=0,_=0,w="idle",x=0;const U=(I,G)=>{const $=T.current-I*G;T.current=ri.clamp($,v,P)},V=I=>{const G=I?.id??null;G!==L.current&&(L.current=G,m.domElement.style.cursor=G?"pointer":"grab",f.current(I))},p=I=>{I.pointerType==="touch"&&(a=I.pointerId,b=I.clientX,S=I.clientY,_=I.clientY,w="idle",m.domElement.setPointerCapture&&m.domElement.setPointerCapture(I.pointerId))},d=I=>{if(I.pointerType==="touch"&&a===I.pointerId){const $=I.clientX-b,H=I.clientY-S,le=Math.abs($)+Math.abs(H);if(w==="idle"&&le>8&&(w=Math.abs(H)>Math.abs($)*1.15?"timeline":"camera"),w==="timeline"){A.enabled=!1,I.preventDefault();const Se=I.clientY-_,De=Math.abs(Se)>14?.07:.05;U(Se,De),x=performance.now()+260}_=I.clientY;return}const G=l(I.clientX,I.clientY);V(G)},R=()=>{A.enabled=!0,V(null)},F=I=>{I.pointerType!=="touch"||a!==I.pointerId||(m.domElement.releasePointerCapture&&m.domElement.releasePointerCapture(I.pointerId),a=null,w="idle",A.enabled=!0,m.domElement.style.cursor="grab")},W=I=>{if(performance.now()<x)return;const G=l(I.clientX,I.clientY);G&&u.current(G)},Y=I=>{I.preventDefault();const G=Math.abs(I.deltaY)>65?.016:.011;U(I.deltaY,G)};return m.domElement.style.cursor="grab",m.domElement.addEventListener("pointerdown",p),m.domElement.addEventListener("pointermove",d),m.domElement.addEventListener("pointerleave",R),m.domElement.addEventListener("pointerup",F),m.domElement.addEventListener("pointercancel",F),m.domElement.addEventListener("click",W),m.domElement.addEventListener("wheel",Y,{passive:!1}),{hoveredState:L,cleanup:()=>{m.domElement.removeEventListener("pointerdown",p),m.domElement.removeEventListener("pointermove",d),m.domElement.removeEventListener("pointerleave",R),m.domElement.removeEventListener("pointerup",F),m.domElement.removeEventListener("pointercancel",F),m.domElement.removeEventListener("click",W),m.domElement.removeEventListener("wheel",Y),A.enabled=!0,m.domElement.style.cursor="grab",L.current=null,f.current(null)}}},Ud=({events:e,projection:n,scene:t})=>{const{points:i,branchIndices:o,pointById:r,eventById:u}=n,{root:f,trackGeometry:T,trackMaterial:v}=t,P=[],m=[],E=[],A=[],B=T(new Xa(.075,9,9)),L=(a,b,S,_,w,x)=>{for(let U=0;U<S;U+=1){const V=_[0]+Math.random()*(_[1]-_[0]),p=w[0]+Math.random()*(w[1]-w[0]),d=x[0]+Math.random()*(x[1]-x[0]),R=v(new xn({color:b,transparent:!0,opacity:d,blending:Pt,depthWrite:!1})),F=new mt(B,R);F.scale.setScalar(p),f.add(F),A.push({mesh:F,curve:a,offset:Math.random(),speed:V,scale:p,baseOpacity:d})}};o.forEach((a,b)=>{if(a.length<2)return;const S=It[b],_=a.map((F,W)=>{const Y=i[F],I=Math.sin(W*1.28+S.phase)*.42,G=Math.cos(W*.98+S.phase*1.3)*.26;return new Ne(Y.x+I*.28,Y.y+G,Y.z)}),w=new Co(_,!1,"centripetal",.34),x=T(new Po(w,Math.max(92,_.length*54),.052,10)),U=v(new ni({color:S.color,emissive:S.color,emissiveIntensity:.52,roughness:.24,metalness:.2,transparent:!0,opacity:.5,depthWrite:!1})),V=new mt(x,U);V.renderOrder=2,f.add(V);const p=T(new Kt().setFromPoints(w.getPoints(190))),d=v(new On({color:S.color,transparent:!0,opacity:.34,blending:Pt,depthWrite:!1})),R=new Fn(p,d);R.renderOrder=3,f.add(R),L(w,S.color,Math.max(10,a.length*5),[.018,.045],[.09,.16],[.3,.5]),P.push({branch:b,mesh:V,glow:R})}),e.forEach((a,b)=>{if(!a.branchFrom)return;const S=r.get(a.branchFrom),_=i[b];if(!S||!_)return;const w=S.clone().add(_).multiplyScalar(.5);w.x+=(_.x-S.x)*.18,w.y+=2.1+Math.abs(S.x-_.x)*.44,w.z+=Math.sin(b*.68+It[a.branch].phase)*.72;const x=new Zi(S,w,_),U=T(new Kt().setFromPoints(x.getPoints(26))),V=v(new On({color:It[a.branch].color,transparent:!0,opacity:.4,blending:Pt,depthWrite:!1})),p=new Fn(U,V);p.renderOrder=2,f.add(p),L(x,It[a.branch].color,8,[.024,.052],[.07,.12],[.26,.42]),m.push({branch:a.branch,sourceId:a.branchFrom,targetId:a.id,line:p})});const l=new Set;return e.forEach((a,b)=>{const S=i[b];a.connections.forEach(_=>{const w=r.get(_);if(!w)return;const x=[a.id,_].sort().join("__");if(l.has(x))return;l.add(x);const U=u.get(_),V=It[a.branch].color,p=U?It[U.branch].color:V,d=S.clone().add(w).multiplyScalar(.5);d.x+=(w.x-S.x)*.08,d.y+=1.5+Math.abs(w.x-S.x)*.16,d.z+=Math.cos(b*.8+w.z*.1)*.5;const R=new $e(V).lerp(new $e(p),.5),F=new Zi(S,d,w),W=T(new Kt().setFromPoints(F.getPoints(22))),Y=v(new On({color:R,transparent:!0,opacity:.17,blending:Pt,depthWrite:!1})),I=new Fn(W,Y);I.renderOrder=1,f.add(I),L(F,R.getHex(),4,[.012,.03],[.045,.09],[.16,.28]),E.push({branch:a.branch,sourceId:a.id,targetId:_,line:I})})}),{branchVisuals:P,forkVisuals:m,connectionVisuals:E,flowParticles:A}},yd=({locale:e,events:n,projection:t,scene:i})=>{const o=Do(e),{points:r}=t,{root:u,labelLayer:f,trackGeometry:T,trackMaterial:v,trackTexture:P}=i,m=[],E=[],A=[],B=Lo(),L=B?P(B):null;return r.forEach((l,a)=>{const b=n[a],S=wo[b.mood],_=.31+Math.min(b.poems.length,4)*.08,w=T(new $i(_,1)),x=v(new ni({color:S,emissive:S,emissiveIntensity:.34,roughness:.38,metalness:.36,flatShading:!0,transparent:!0,opacity:.95})),U=new mt(w,x);U.position.copy(l),U.userData.event=b,u.add(U),m.push(U);const V=T(new $i(_*1.7,0)),p=v(new xn({color:S,transparent:!0,opacity:.23,wireframe:!0,depthWrite:!1,blending:Pt})),d=new mt(V,p);d.position.copy(l),u.add(d);const R=T(new Xa(_*.36,14,14)),F=v(new xn({color:S,transparent:!0,opacity:.92,blending:Pt,depthWrite:!1})),W=new mt(R,F);W.position.copy(l),u.add(W);const Y=v(new Uo({map:L??void 0,color:S,transparent:!0,opacity:.26,blending:Pt,depthWrite:!1})),I=new yo(Y);I.position.copy(l);const G=_*8.6;I.scale.set(G,G,1),I.userData.baseSize=G,u.add(I);const $=document.createElement("div");$.className="timeline-node-label",$.classList.add(`timeline-node-label--${b.branch}`);const H=Io(e,"timeline.nodeLabelPoems",{count:b.poems.length});$.innerHTML=`
      <div class="timeline-node-label__head">
        <span class="timeline-node-label__year">${b.year}</span>
        <span class="timeline-node-label__tag">${H}</span>
      </div>
      <strong class="timeline-node-label__title">${b.title}</strong>
      <small class="timeline-node-label__meta">${o[b.branch]} - ${b.location}</small>
    `,f.appendChild($),A.push({event:b,element:$,node:U});const le=new Ya;le.position.copy(l),u.add(le);const Se=No.map(Ue=>({group:Ue,poems:b.poems.filter(ke=>ke.group===Ue)})).filter(Ue=>Ue.poems.length>0),De=[];Se.forEach((Ue,ke)=>{const Ye=Oo[Ue.group],Ve=_+.88+ke*.34,X=(ke-(Se.length-1)/2)*.3;Ue.poems.forEach((q,se)=>{const Me=ke*17+se*13,pe=se/Ue.poems.length*Math.PI*2+ke*.82+Math.sin(Me*.37)*.24,Oe=X+Math.cos(Me*.49)*.18,at=Ve+Math.sin(Me*.61)*.14,g=Fo(Ue.group,T),Ke=v(new ni({color:Ye.color,emissive:Ye.color,emissiveIntensity:.42,roughness:.42,metalness:.2,transparent:!0,opacity:.88})),Ae=new mt(g,Ke),Re=.9+Math.sin(Me*.92)*.22;Ae.scale.setScalar(Re),Ae.position.set(Math.cos(pe)*at,Oe,Math.sin(pe)*at),Ae.userData.event=b,le.add(Ae),m.push(Ae),De.push({mesh:Ae,baseAngle:pe,radius:at,height:Oe,speed:Ye.speed+se*.018+(Math.sin(Me*.41)+1)*.012,phase:Math.abs(Math.sin(Me*.23))*Math.PI*2,wobble:.08+Math.abs(Math.cos(Me*.57))*.12,drift:.8+Math.abs(Math.sin(Me*.35))*1.4,tilt:(Math.sin(Me*.69)-.5)*.78})})}),E.push({event:b,node:U,shell:d,core:W,aura:I,satelliteRoot:le,satellites:De})}),{interactiveMeshes:m,clusters:E,labels:A}},xa=6.05,Id=e=>{const n=Math.max(e.length-1,0)*xa/2,t=e.map((P,m)=>{const E=It[P.branch],A=m*.56+E.phase;return new Ne(E.offsetX+Math.sin(A)*1.25,E.offsetY+Math.cos(A*.84)*.9,m*xa-n)}),i=t.map(P=>-P.z),o=i.length>0?Math.min(...i)-4.2:-12,r=i.length>0?Math.max(...i)+4.2:12,u=new Map;e.forEach((P,m)=>{u.set(P.id,ri.clamp(-t[m].z,o,r))});const f=new Map;e.forEach((P,m)=>{const E=f.get(P.branch)??[];E.push(m),f.set(P.branch,E)});const T=new Map(e.map(P=>[P.id,P])),v=new Map(e.map((P,m)=>[P.id,t[m]]));return{points:t,minOffset:o,maxOffset:r,branchIndices:f,eventById:T,pointById:v,focusOffsetById:u}},Nd=({host:e,scene:n})=>{const{renderer:t,camera:i}=n,o=()=>{const f=e.clientWidth,T=e.clientHeight;f===0||T===0||(t.setSize(f,T),i.aspect=f/T,i.updateProjectionMatrix())};o();const r=new ResizeObserver(o);r.observe(e);const u=window.visualViewport;return u&&(u.addEventListener("resize",o),u.addEventListener("scroll",o)),()=>{r.disconnect(),u&&(u.removeEventListener("resize",o),u.removeEventListener("scroll",o))}},Aa={type:"change"},si={type:"start"},Qa={type:"end"},gn=new Go,Ra=new La,Od=Math.cos(70*ri.DEG2RAD),ot=new Ne,ut=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xn=1e-6;class Fd extends Bo{constructor(n,t=null){super(n,t),this.state=We.NONE,this.target=new Ne,this.cursor=new Ne,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qt.ROTATE,MIDDLE:qt.DOLLY,RIGHT:qt.PAN},this.touches={ONE:Xt.ROTATE,TWO:Xt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Ne,this._lastQuaternion=new ji,this._lastTargetPosition=new Ne,this._quat=new ji().setFromUnitVectors(n.up,new Ne(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qi,this._sphericalDelta=new Qi,this._scale=1,this._panOffset=new Ne,this._rotateStart=new Ze,this._rotateEnd=new Ze,this._rotateDelta=new Ze,this._panStart=new Ze,this._panEnd=new Ze,this._panDelta=new Ze,this._dollyStart=new Ze,this._dollyEnd=new Ze,this._dollyDelta=new Ze,this._dollyDirection=new Ne,this._mouse=new Ze,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Gd.bind(this),this._onPointerDown=Bd.bind(this),this._onPointerUp=Hd.bind(this),this._onContextMenu=Kd.bind(this),this._onMouseWheel=zd.bind(this),this._onKeyDown=Wd.bind(this),this._onTouchStart=Xd.bind(this),this._onTouchMove=Yd.bind(this),this._onMouseDown=Vd.bind(this),this._onMouseMove=kd.bind(this),this._interceptControlDown=qd.bind(this),this._interceptControlUp=Zd.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(n){super.connect(n),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(n){n.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=n}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Aa),this.update(),this.state=We.NONE}update(n=null){const t=this.object.position;ot.copy(t).sub(this.target),ot.applyQuaternion(this._quat),this._spherical.setFromVector3(ot),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(n)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=ut:i>Math.PI&&(i-=ut),o<-Math.PI?o+=ut:o>Math.PI&&(o-=ut),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=u!=this._spherical.radius}if(ot.setFromSpherical(this._spherical),ot.applyQuaternion(this._quatInverse),t.copy(this.target).add(ot),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const f=ot.length();u=this._clampDistance(f*this._scale);const T=f-u;this.object.position.addScaledVector(this._dollyDirection,T),this.object.updateMatrixWorld(),r=!!T}else if(this.object.isOrthographicCamera){const f=new Ne(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const T=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=T!==this.object.zoom;const v=new Ne(this._mouse.x,this._mouse.y,0);v.unproject(this.object),this.object.position.sub(v).add(f),this.object.updateMatrixWorld(),u=ot.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(gn.origin.copy(this.object.position),gn.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gn.direction))<Od?this.object.lookAt(this.target):(Ra.setFromNormalAndCoplanarPoint(this.object.up,this.target),gn.intersectPlane(Ra,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xn||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xn||this._lastTargetPosition.distanceToSquared(this.target)>Xn?(this.dispatchEvent(Aa),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(n){return n!==null?ut/60*this.autoRotateSpeed*n:ut/60/60*this.autoRotateSpeed}_getZoomScale(n){const t=Math.abs(n*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(n){this._sphericalDelta.theta-=n}_rotateUp(n){this._sphericalDelta.phi-=n}_panLeft(n,t){ot.setFromMatrixColumn(t,0),ot.multiplyScalar(-n),this._panOffset.add(ot)}_panUp(n,t){this.screenSpacePanning===!0?ot.setFromMatrixColumn(t,1):(ot.setFromMatrixColumn(t,0),ot.crossVectors(this.object.up,ot)),ot.multiplyScalar(n),this._panOffset.add(ot)}_pan(n,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;ot.copy(o).sub(this.target);let r=ot.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*n*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(n*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(n){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=n:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(n,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=n-i.left,r=t-i.top,u=i.width,f=i.height;this._mouse.x=o/u*2-1,this._mouse.y=-(r/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(n){return Math.max(this.minDistance,Math.min(this.maxDistance,n))}_handleMouseDownRotate(n){this._rotateStart.set(n.clientX,n.clientY)}_handleMouseDownDolly(n){this._updateZoomParameters(n.clientX,n.clientX),this._dollyStart.set(n.clientX,n.clientY)}_handleMouseDownPan(n){this._panStart.set(n.clientX,n.clientY)}_handleMouseMoveRotate(n){this._rotateEnd.set(n.clientX,n.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(n){this._dollyEnd.set(n.clientX,n.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(n){this._panEnd.set(n.clientX,n.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(n){this._updateZoomParameters(n.clientX,n.clientY),n.deltaY<0?this._dollyIn(this._getZoomScale(n.deltaY)):n.deltaY>0&&this._dollyOut(this._getZoomScale(n.deltaY)),this.update()}_handleKeyDown(n){let t=!1;switch(n.code){case this.keys.UP:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateUp(-ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:n.ctrlKey||n.metaKey||n.shiftKey?this.enableRotate&&this._rotateLeft(-ut*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(n.preventDefault(),this.update())}_handleTouchStartRotate(n){if(this._pointers.length===1)this._rotateStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),o=.5*(n.pageY+t.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(n){if(this._pointers.length===1)this._panStart.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),o=.5*(n.pageY+t.y);this._panStart.set(i,o)}}_handleTouchStartDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,o=n.pageY-t.y,r=Math.sqrt(i*i+o*o);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enablePan&&this._handleTouchStartPan(n)}_handleTouchStartDollyRotate(n){this.enableZoom&&this._handleTouchStartDolly(n),this.enableRotate&&this._handleTouchStartRotate(n)}_handleTouchMoveRotate(n){if(this._pointers.length==1)this._rotateEnd.set(n.pageX,n.pageY);else{const i=this._getSecondPointerPosition(n),o=.5*(n.pageX+i.x),r=.5*(n.pageY+i.y);this._rotateEnd.set(o,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ut*this._rotateDelta.x/t.clientHeight),this._rotateUp(ut*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(n){if(this._pointers.length===1)this._panEnd.set(n.pageX,n.pageY);else{const t=this._getSecondPointerPosition(n),i=.5*(n.pageX+t.x),o=.5*(n.pageY+t.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(n){const t=this._getSecondPointerPosition(n),i=n.pageX-t.x,o=n.pageY-t.y,r=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(n.pageX+t.x)*.5,f=(n.pageY+t.y)*.5;this._updateZoomParameters(u,f)}_handleTouchMoveDollyPan(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enablePan&&this._handleTouchMovePan(n)}_handleTouchMoveDollyRotate(n){this.enableZoom&&this._handleTouchMoveDolly(n),this.enableRotate&&this._handleTouchMoveRotate(n)}_addPointer(n){this._pointers.push(n.pointerId)}_removePointer(n){delete this._pointerPositions[n.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(n){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==n.pointerId)return!0;return!1}_trackPointer(n){let t=this._pointerPositions[n.pointerId];t===void 0&&(t=new Ze,this._pointerPositions[n.pointerId]=t),t.set(n.pageX,n.pageY)}_getSecondPointerPosition(n){const t=n.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(n){const t=n.deltaMode,i={clientX:n.clientX,clientY:n.clientY,deltaY:n.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return n.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Bd(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function Gd(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Hd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qa),this.state=We.NONE;break;case 1:const n=this._pointers[0],t=this._pointerPositions[n];this._onTouchStart({pointerId:n,pageX:t.x,pageY:t.y});break}}function Vd(e){let n;switch(e.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=We.DOLLY;break;case qt.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=We.ROTATE}break;case qt.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(si)}function kd(e){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function zd(e){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(e.preventDefault(),this.dispatchEvent(si),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Qa))}function Wd(e){this.enabled!==!1&&this._handleKeyDown(e)}function Xd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Xt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=We.TOUCH_ROTATE;break;case Xt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Xt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=We.TOUCH_DOLLY_PAN;break;case Xt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(si)}function Yd(e){switch(this._trackPointer(e),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=We.NONE}}function Kd(e){this.enabled!==!1&&e.preventDefault()}function qd(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zd(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $d=e=>{const n=new Ho;n.fog=new Vo(593700,.051);const t=new nn(52,1,.1,320);t.position.set(0,5.2,16);const i=new Ld({antialias:!0,alpha:!0});i.outputColorSpace=ba,i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.domElement.style.touchAction="none",e.appendChild(i.domElement);const o=document.createElement("div");o.className="timeline-label-layer",e.appendChild(o);const r=new Fd(t,i.domElement);r.enablePan=!1,r.enableZoom=!1,r.enableDamping=!0,r.dampingFactor=.06,r.minDistance=7,r.maxDistance=30,r.maxPolarAngle=Math.PI*.64,r.target.set(0,0,0);const u=[],f=[],T=[],v=x=>(u.push(x),x),P=x=>(f.push(x),x),m=x=>(T.push(x),x),E=new Ya;n.add(E);const A=new ko(10664191,.56),B=new Bn(8701951,18,120,1.7);B.position.set(9,8,10);const L=new Bn(16750699,11,98,2);L.position.set(-11,-1,-8);const l=new Bn(13678591,7.6,88,1.9);l.position.set(0,8,-12),n.add(A,B,L,l);const a=v(new Kt),b=1950,S=new Float32Array(b*3);for(let x=0;x<b;x+=1){const U=x*3;S[U]=(Math.random()-.5)*150,S[U+1]=(Math.random()-.5)*100,S[U+2]=(Math.random()-.5)*170}a.setAttribute("position",new rn(S,3));const _=P(new zo({color:14740223,size:.06,sizeAttenuation:!0,transparent:!0,opacity:.72})),w=new Wo(a,_);return n.add(w),{scene:n,camera:t,renderer:i,labelLayer:o,controls:r,root:E,stars:w,starsMaterial:_,trackedGeometries:u,trackedMaterials:f,trackedTextures:T,trackGeometry:v,trackMaterial:P,trackTexture:m}},jd=(e,n)=>{e.controls.dispose(),e.trackedGeometries.forEach(t=>t.dispose()),e.trackedMaterials.forEach(t=>t.dispose()),e.trackedTextures.forEach(t=>t.dispose()),e.renderer.dispose(),e.labelLayer.remove(),e.renderer.domElement.parentElement===n&&n.removeChild(e.renderer.domElement)},Qd=({locale:e,host:n,events:t,activeEventIdRef:i,onSelectRef:o,onHoverRef:r,focusOffsetByIdRef:u,targetOffsetRef:f})=>{const T=$d(n),v=Id(t);if(u.current=v.focusOffsetById,i.current){const L=v.focusOffsetById.get(i.current);typeof L=="number"&&(f.current=L)}const P=Ud({events:t,projection:v,scene:T}),m=yd({locale:e,events:t,projection:v,scene:T}),E=wd({refs:{onSelectRef:o,onHoverRef:r,targetOffsetRef:f},projection:v,scene:T,nodes:m}),A=Nd({host:n,scene:T}),B=Xo({refs:{activeEventIdRef:i,targetOffsetRef:f},hoveredState:E.hoveredState,projection:v,flow:P,nodes:m,scene:T});return()=>{B(),A(),E.cleanup(),jd(T,n)}};function eu({locale:e,events:n,activeEventId:t,onSelect:i,onHover:o}){const{t:r}=Yo(),u=Tt.useRef(null),f=Tt.useRef(t),T=Tt.useRef(i),v=Tt.useRef(o),P=Tt.useRef(new Map),m=Tt.useRef(0);return Tt.useEffect(()=>{if(f.current=t,!t)return;const E=P.current.get(t);typeof E=="number"&&(m.current=E)},[t]),Tt.useEffect(()=>{T.current=i},[i]),Tt.useEffect(()=>{v.current=o},[o]),Tt.useEffect(()=>{const E=u.current;if(E)return Qd({locale:e,host:E,events:n,activeEventIdRef:f,onSelectRef:T,onHoverRef:v,focusOffsetByIdRef:P,targetOffsetRef:m})},[n,e]),Ko.jsx("div",{className:"three-timeline",ref:u,role:"img","aria-label":r("timeline.ariaLabel")})}export{eu as ThreeTimeline};
