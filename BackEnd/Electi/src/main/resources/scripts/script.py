# @Author: Juan Cervantes
# @Date: 1/23/2025
# @About: Encrypting the data

# Partial Homomorphic Encryption
# Se usa parcialmente ya que solo permite suma y multiplicación
# En términos simples permite agregar una operación a los datos cifrados sin la necesidad de descifrar

from phe import paillier
import sys

def run():
    # Genera la llave pública para encriptar los datos
    # Y la llave privada para desencriptarlos
    public_key, private_key = paillier.generate_paillier_keypair()

    # Leer datos desde la entrada estándar o interactiva
    try:
        input_data = input("Introduce dos números separados por un espacio (por ejemplo: 5 3): ").strip()
        plaintext1, plaintext2 = map(int, input_data.split())
    except Exception as e:
        print(f"Error en la entrada de datos: {e}")
        return

    # Encripta los textos planos con la llave pública
    encrypted1 = public_key.encrypt(plaintext1)
    encrypted2 = public_key.encrypt(plaintext2)

    # Muestra los valores encriptados
    print("Encrypted Values:")
    print(f"Ciphertext 1: {encrypted1}")
    print(f"Ciphertext 2: {encrypted2}")

    # Encripta los datos sumándolos entre sí sin la necesidad de desencriptar
    encrypted_sum = encrypted1 + encrypted2

    # Encripta uno solo de los datos con una multiplicación por un escalar
    plaintext_scalar = 2
    encrypted_scaled = encrypted1 * plaintext_scalar

    # Decripta los resultados con la llave privada
    decrypted_sum = private_key.decrypt(encrypted_sum)
    decrypted_scaled = private_key.decrypt(encrypted_scaled)

    # Muestra los datos desencriptados
    print("\nDecrypted Results:")
    print(f"Decrypted Sum ({plaintext1} + {plaintext2}): {decrypted_sum}")
    print(f"Decrypted Scaled ({plaintext1} * {plaintext_scalar}): {decrypted_scaled}")

if __name__ == "__main__":#Main Function
    run()
