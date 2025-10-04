def xor_decrypt(data: bytes, key_hex: str) -> bytes:
    """
    使用十六进制 key 对 data 进行 XOR 解密
    :param data: 加密数据（二进制）
    :param key_hex: 十六进制字符串秘钥，例如 "1a2b3c"
    :return: 解密后的数据（二进制）
    """
    key = bytes.fromhex(key_hex)  # 把十六进制字符串转为字节
    key_len = len(key)
    result = bytearray(len(data))

    for i, byte in enumerate(data):
        result[i] = byte ^ key[i % key_len]

    return bytes(result)


if __name__ == "__main__":
    # 示例：从文件读取并解密
    key_hex = "8a0939ca387de1c127813addc123f70f9e1d99df55ec68e9ad3cb10dcac803e2"  # ⚠️ 换成你的真实秘钥（十六进制字符串）
    with open("i-007.enc", "rb") as f:
        encrypted = f.read()

    decrypted = xor_decrypt(encrypted, key_hex)

    with open("decrypted.webp", "wb") as f:
        f.write(decrypted)

    print("解密完成 -> decrypted.bin")
