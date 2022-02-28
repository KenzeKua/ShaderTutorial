precision mediump float;
uniform float Factor1;

float fakePI = 3.14159265359;

float r, g , b;

void main()                           
{                               
	// r = abs(cos(gl_FragCoord.x * 0.01));
	// g = abs(cos(gl_FragCoord.y * 0.1));
	// b = abs(sin(gl_FragCoord.x + gl_FragCoord.y));
    
	// if (gl_FragCoord.x <= 400.0)
	// {
		// gl_FragColor = vec4 ( 1.0, 0.0, 0.0, 1.0 );
	// }
	// else
	// {	
		// gl_FragColor = vec4 ( 0.0, 0.0, 1.0, 1.0 );
	// }
	
	// Self
	// r = (sin(gl_FragCoord.x * 0.033 + Factor1 + (2.0 * fakePI) * 0.0 / 3.0) + 1.0) / 2.0;
	// g = (sin(gl_FragCoord.x * 0.033 + Factor1 + ((2.0 * fakePI) * 1.0 / 3.0)) + 1.0) / 2.0;
	// b = (sin(gl_FragCoord.x * 0.033 + Factor1 + ((2.0 * fakePI) * 2.0 / 3.0)) + 1.0) / 2.0;
	
	// Lecturer's
	// r = cos(gl_FragCoord.x * 0.03 + 0.0 + Factor1) * 0.5 + 0.5;
	// g = cos(gl_FragCoord.x * 0.03 + 2.0 + Factor1) * 0.5 + 0.5;
	// b = cos(gl_FragCoord.x * 0.03 + 4.0 + Factor1) * 0.5 + 0.5;
	
	// Circle
	r = g = b = 1.0;
	
	if (distance(gl_FragCoord.xy, vec2(400.0, 300.0)) < 90.0 * sin(Factor1))
	{	
		// Just red
		// r = 1.0;
		// g = 0.0;
		// b = 0.3;
		
		// Rainbow
		r = cos(gl_FragCoord.x * 0.03 + 0.0 + Factor1) * 0.5 + 0.5;
		g = cos(gl_FragCoord.x * 0.03 + 2.0 + Factor1) * 0.5 + 0.5;
		b = cos(gl_FragCoord.x * 0.03 + 4.0 + Factor1) * 0.5 + 0.5;
	}
	
	gl_FragColor = vec4 ( r, g, b, 1.0 );
}