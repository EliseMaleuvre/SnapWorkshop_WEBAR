import {
	bootstrapCameraKit,
	createMediaStreamSource,
	Transform2D,
} from '@snap/camera-kit';
//
(async function(){
	var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNjk3MTIzOTI2LCJzdWIiOiI3ODJlYjA2NC00MjM3LTQzODgtODJlNC1jOGIwOWNhZGIwZmN-U1RBR0lOR341ZGRhYTg2Ny1jYWMyLTRhMzYtOWQ3NS1iNjY3NmZmOTg5N2MifQ.z6bpHVlUcJoKbTZpapMiB_E5SUQp4a4TsIAG4YtwxEg' });

	const session = await cameraKit.createSession();
	document.getElementById('canvas').replaceWith(session.output.live);

	const { lenses } = await cameraKit.lensRepository.loadLensGroups(['fdded87a-8f14-4b48-8608-d2ba904f01c3']);

	session.applyLens(lenses[0]);

	let mediaStream = await navigator.mediaDevices.getUserMedia({ video:{
		facingMode: 'environment'}
	});

	const source = createMediaStreamSource(mediaStream, {
		cameraType: 'back',
	})

	await session.setSource(source);

	session.source.setRenderSize(window.innerWidth, window.innerHeight);

	session.play();
})();

/*GitHub Copilot: I can provide a brief explanation of what each line of code does:

1. `import { bootstrapCameraKit, createMediaStreamSource, Transform2D } from '@snap/camera-kit';` - This line imports three functions from the '@snap/camera-kit' library: 'bootstrapCameraKit', 'createMediaStreamSource', and 'Transform2D'.

2. `(async function(){` - This line starts an immediately invoked async function expression.

3. `var cameraKit = await bootstrapCameraKit({ apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNjk3MTIzOTI2LCJzdWIiOiI3ODJlYjA2NC00MjM3LTQzODgtODJlNC1jOGIwOWNhZGIwZmN-U1RBR0lOR341ZGRhYTg2Ny1jYWMyLTRhMzYtOWQ3NS1iNjY3NmZmOTg5N2MifQ.z6bpHVlUcJoKbTZpapMiB_E5SUQp4a4TsIAG4YtwxEg' });` - This line calls the 'bootstrapCameraKit' function with an API token and assigns the returned cameraKit object to a variable.

4. `const session = await cameraKit.createSession();` - This line creates a camera session using the 'createSession' function on the cameraKit object and assigns it to a constant variable.

5. `document.getElementById('canvas').replaceWith(session.output.live);` - This line replaces the 'canvas' element in the HTML document with the live output of the camera session.

6. `const { lenses } = await cameraKit.lensRepository.loadLensGroups(['<GROUP_ID>']);` - This line loads a lens group using the 'loadLensGroups' function and assigns the first lens in the group to a constant variable.

7. `session.applyLens(lenses[0]);` - This line applies the first lens in the loaded group to the camera session.

8. `let mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });` - This line requests access to the user's camera using the 'getUserMedia' function and assigns the resulting media stream to a variable.

9. `const source = createMediaStreamSource(mediaStream, { transform: Transform2D.MirrorX, cameraType: 'front' })` - This line creates a media stream source using the 'createMediaStreamSource' function and assigns it to a constant variable. The source is set to mirror the video horizontally and use the front-facing camera.

10. `await session.setSource(source);` - This line sets the media stream source as the source for the camera session.

11. `session.source.setRenderSize(window.innerWidth, window.innerHeight);` - This line sets the render size of the camera session to the size of the window.

12. `session.play();` - This line starts playing the camera session.*/

