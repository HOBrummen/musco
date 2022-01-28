module.exports = {
	displayName: 'app',
	preset: '../../jest.preset.js',
	transform: {
		'^.+\\.[tj]s$': 'babel-jest'
	},
	moduleFileExtensions: ['ts', 'js', 'html'],
	coverageDirectory: '../../coverage/apps/app'
}
