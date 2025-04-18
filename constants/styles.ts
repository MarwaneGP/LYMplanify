import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#3478f6',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  buttonLink: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#3478f6',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
});


export default styles;